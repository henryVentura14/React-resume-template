import {FC, memo} from 'react';

import {TimelineItem as TimelineItemData} from '../../../data/dataDef';

const TimelineItem: FC<{item: TimelineItemData}> = memo(({item}) => {
  const {title, date, location, content, urlTitle, urlLocation} = item;
  return (
    <div className="flex flex-col pb-8 text-center last:pb-0 md:text-left">
      <div className="flex flex-col pb-4">
        <h2 className="text-xl font-bold"> <a href={urlTitle} target='_blank'>{title}</a></h2>
        <div className="flex items-center justify-center gap-x-2 md:justify-start">
          <span className="flex-1 text-sm font-medium italic sm:flex-none"><a href={urlLocation} target='_blank'>{location}</a></span>
          <span>•</span>
          <span className="flex-1 text-sm sm:flex-none">{date}</span>
        </div>
      </div>
      {content}
    </div>
  );
});

TimelineItem.displayName = 'TimelineItem';
export default TimelineItem;
