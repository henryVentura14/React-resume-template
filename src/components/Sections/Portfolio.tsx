import classNames from 'classnames';
import Image from 'next/image';
import {FC, memo, MouseEvent, useCallback, useEffect, useRef, useState} from 'react';

import {isMobile} from '../../config';
import {portfolioItems, SectionId} from '../../data/data';
import {PortfolioItem} from '../../data/dataDef';
import useDetectOutsideClick from '../../hooks/useDetectOutsideClick';
import Section from '../Layout/Section';
import PortfolioModal from './Portfolio/PortfolioModal';

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
    <Section className="bg-neutral-900" sectionId={SectionId.Portfolio}>
      <div className="flex flex-col gap-y-8">
        <h2 className="self-center text-xl font-bold text-white">Mira algunos de mis trabajos</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {portfolioItems.map((item, index) => (
            <div key={`${item.title}-${index}`}>
              <div
                className={classNames(
                  'relative h-40 w-full overflow-hidden rounded-lg shadow-lg shadow-black/30 lg:shadow-xl bg-white flex items-center justify-center',
                )}>
                <Image
                  alt={item.title}
                  className="object-contain h-full w-full"
                  loading="lazy"
                  placeholder="blur"
                  src={item.image}
                />
                <a
                  className="absolute inset-0 bg-gray-900 bg-opacity-0 hover:bg-opacity-80 transition-all duration-300 flex items-center justify-center"
                  href={item.url}
                  onClick={e => handleItemClick(e, item)}
                  ref={linkRef}
                  target="_blank">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <h2 className="text-white font-bold bg-black bg-opacity-50 px-3 py-1 rounded">{item.title}</h2>
                    </div>
                  </div>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      <PortfolioModal
        demoLinkRef={demoLinkRef}
        githubLinkRef={githubLinkRef}
        modalRef={modalRef}
        onClose={handleCloseModal}
        selectedItem={selectedItem}
        showModal={showModal}
      />
    </Section>
  );
});

Portfolio.displayName = 'Portfolio';
export default Portfolio;
