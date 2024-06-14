import {XCircleIcon} from '@heroicons/react/24/outline';
import classNames from 'classnames';
import Image from 'next/image';
import {FC, memo, MouseEvent, useCallback, useEffect, useRef, useState} from 'react';

import {isMobile} from '../../config';
import {portfolioItems, SectionId} from '../../data/data';
import {PortfolioItem} from '../../data/dataDef';
import useDetectOutsideClick from '../../hooks/useDetectOutsideClick';
import Section from '../Layout/Section';

const Portfolio: FC = memo(() => {
  const [selectedItem, setSelectedItem] = useState<PortfolioItem | null>(null);
  const [showModal, setShowModal] = useState(false);
  const linkRef = useRef<HTMLAnchorElement>(null);
  const modalRef = useRef<HTMLDivElement>(null);
  const demoLinkRef = useRef<HTMLAnchorElement>(null);
  const githubLinkRef = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    if (isMobile) {
      setShowModal(true);
    }
  }, []);

  useDetectOutsideClick([linkRef, modalRef, demoLinkRef, githubLinkRef], () => setShowModal(false));

  const handleItemClick = useCallback((event: MouseEvent<HTMLElement>, item: PortfolioItem) => {
    event.preventDefault();
    setSelectedItem(item);
    setShowModal(true);
  }, []);

  const handleCloseModal = useCallback(() => {
    setSelectedItem(null);
    setShowModal(false);
  }, []);

  return (
    <Section className="bg-neutral-800" sectionId={SectionId.Portfolio}>
      <div className="flex flex-col gap-y-8">
        <h2 className="self-center text-xl font-bold text-white">Check out some of my work</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {portfolioItems.map((item, index) => (
            <div key={`${item.title}-${index}`}>
              <div
                className={classNames(
                  'relative h-40 w-full overflow-hidden rounded-lg shadow-lg shadow-black/30 lg:shadow-xl bg-white flex items-center justify-center',
                )}
              >
                <Image
                  alt={item.title}
                  className="object-contain h-full w-full"
                  placeholder="blur"
                  src={item.image}
                />
                <a
                  className="absolute inset-0 bg-gray-900 bg-opacity-0 hover:bg-opacity-80 transition-all duration-300 flex items-center justify-center"
                  href={item.url}
                  onClick={(e) => handleItemClick(e, item)}
                  ref={linkRef}
                  target="_blank"
                >
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <h2 className="text-white font-bold">{item.title}</h2>
                    </div>
                  </div>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
      {selectedItem && (
        <div
          className={classNames('fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50', {
            hidden: !showModal,
          })}
        >
          <div className="bg-white rounded-lg shadow-lg p-8 max-w-3xl mx-auto flex flex-col" ref={modalRef}>
            <header className="flex justify-end mb-4">
              <button
                aria-label="Close modal"
                className="text-gray-700 hover:text-gray-900"
                onClick={handleCloseModal}
                type="button"
              >
                <XCircleIcon className="h-6 w-6" />
              </button>
            </header>
            <div className="flex items-center justify-center">
              <div className="w-1/2 pr-4 bg-white flex items-center justify-center h-80 rounded-lg">
                <Image
                  alt={selectedItem.title}
                  className="object-contain h-full w-full"
                  placeholder="blur"
                  src={selectedItem.image}
                />
              </div>
              <div className="w-1/2 pl-4 z-50">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">{selectedItem.title}</h2>
                <p className="text-sm text-gray-800 mb-4">{selectedItem.description}</p>
                <div className="mb-4">
                  <a
                    className="text-blue-500 underline"
                    href={selectedItem.url}
                    onClick={(e) => e.stopPropagation()}
                    ref={demoLinkRef}
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    Link
                  </a>
                </div>
                {selectedItem.repository && (
                  <div className="mb-4">
                    <a
                      className="text-blue-500 underline"
                      href={selectedItem.repository}
                      onClick={(e) => e.stopPropagation()}
                      ref={githubLinkRef}
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      Repository
                    </a>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </Section>
  );
});

Portfolio.displayName = 'Portfolio';
export default Portfolio;
