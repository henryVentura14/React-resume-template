import {LinkIcon, XCircleIcon} from '@heroicons/react/24/outline';
import classNames from 'classnames';
import Image from 'next/image';
import {FC, memo, RefObject} from 'react';

import {PortfolioItem} from '../../../data/dataDef';

interface PortfolioModalProps {
  selectedItem: PortfolioItem | null;
  showModal: boolean;
  modalRef: RefObject<HTMLDivElement>;
  demoLinkRef: RefObject<HTMLAnchorElement>;
  githubLinkRef: RefObject<HTMLAnchorElement>;
  onClose: () => void;
}

const PortfolioModal: FC<PortfolioModalProps> = memo(
  ({selectedItem, showModal, modalRef, demoLinkRef, githubLinkRef, onClose}) => {
    if (!selectedItem) return null;

    return (
      <div
        className={classNames('fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 p-4', {
          hidden: !showModal,
        })}>
        <div
          className="bg-white rounded-lg shadow-lg p-6 max-w-2xl w-full mx-auto flex flex-col max-h-[90vh] overflow-y-auto"
          ref={modalRef}>
          {/* Header con título y botón cerrar */}
          <header className="flex justify-between items-start mb-6">
            <h2 className="text-2xl font-bold text-gray-900 pr-4">{selectedItem.title}</h2>
            <button
              aria-label="Close modal"
              className="text-gray-700 hover:text-gray-900 flex-shrink-0"
              onClick={onClose}
              type="button">
              <XCircleIcon className="h-8 w-8" />
            </button>
          </header>

          {/* Imagen */}
          <div className="w-full bg-white flex items-center justify-center mb-6 rounded-lg border border-gray-200">
            <div className="w-full h-64 sm:h-80 relative">
              <Image
                alt={selectedItem.title}
                className="object-contain rounded-lg"
                fill
                placeholder="blur"
                src={selectedItem.image}
              />
            </div>
          </div>

          {/* Contenido */}
          <div className="space-y-4">
            {/* Descripción */}
            <div>
              <p className="text-gray-800 leading-relaxed">{selectedItem.description}</p>
            </div>

            {/* Tecnologías */}
            {selectedItem.technologies && selectedItem.technologies.length > 0 && (
              <div>
                <h3 className="text-sm font-semibold text-gray-700 mb-2">Tecnologías utilizadas:</h3>
                <div className="flex flex-wrap gap-2">
                  {selectedItem.technologies.map((tech, index) => (
                    <span
                      className="bg-gray-100 text-gray-800 text-xs font-medium px-3 py-1 rounded-full border"
                      key={`${tech}-${index}`}>
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Enlaces */}
            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <a
                className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-800 font-medium transition-colors"
                href={selectedItem.url}
                onClick={e => e.stopPropagation()}
                ref={demoLinkRef}
                rel="noopener noreferrer"
                target="_blank">
                <LinkIcon className="h-4 w-4" />
                Ver aplicación
              </a>

              {selectedItem.repository && (
                <a
                  className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-800 font-medium transition-colors"
                  href={selectedItem.repository}
                  onClick={e => e.stopPropagation()}
                  ref={githubLinkRef}
                  rel="noopener noreferrer"
                  target="_blank">
                  <LinkIcon className="h-4 w-4" />
                  Ver en GitHub
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  },
);

PortfolioModal.displayName = 'PortfolioModal';
export default PortfolioModal;
