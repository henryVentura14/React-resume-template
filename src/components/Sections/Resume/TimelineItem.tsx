import {FC, memo} from 'react';

import {TimelineItem as TimelineItemData} from '../../../data/dataDef';

const TimelineItem: FC<{item: TimelineItemData}> = memo(({item}) => {
  const {title, date, location, content, urlTitle, urlLocation} = item;
  return (
    <div className="flex flex-col pb-8 text-center last:pb-0 md:text-left">
      <div className="flex flex-col pb-4">
        <h3 className="text-lg md:text-xl font-semibold text-neutral-900">
          {urlTitle ? (
            <a className="hover:underline" href={urlTitle} rel="noreferrer" target="_blank">
              {title}
            </a>
          ) : (
            title
          )}
        </h3>
        <div className="mt-2 flex flex-col items-center gap-1 text-sm text-neutral-600 md:flex-row md:items-center md:gap-x-3">
          <span className="font-medium italic md:flex-none">
            {urlLocation ? (
              <a className="hover:underline" href={urlLocation} rel="noreferrer" target="_blank">
                {location}
              </a>
            ) : (
              location
            )}
          </span>
          <span className="hidden md:inline">•</span>
          <span className="md:flex-none">{date}</span>
        </div>
      </div>
      <div className="prose prose-sm max-w-none text-neutral-700">{content}</div>
    </div>
  );
});

TimelineItem.displayName = 'TimelineItem';
export default TimelineItem;
