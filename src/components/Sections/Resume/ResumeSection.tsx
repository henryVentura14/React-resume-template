import {FC, memo, PropsWithChildren} from 'react';

const ResumeSection: FC<PropsWithChildren<{title: string}>> = memo(({title, children}) => {
  return (
    <div className="grid grid-cols-1 gap-y-6 py-8 first:pt-0 last:pb-0 md:grid-cols-4 md:gap-y-0">
      <div className="col-span-1 flex justify-center md:justify-start">
        <div className="relative h-max pr-4 md:pr-6">
          <h2 className="text-lg md:text-xl font-extrabold uppercase text-neutral-800 tracking-wide">{title}</h2>
          <span className="absolute left-0 -bottom-2 w-12 h-0.5 bg-orange-400 rounded-md" />
        </div>
      </div>
      <div className="col-span-1 flex flex-col gap-y-6 md:col-span-3">{children}</div>
    </div>
  );
});

ResumeSection.displayName = 'ResumeSection';
export default ResumeSection;
