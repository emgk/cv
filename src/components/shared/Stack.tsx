import Link from 'next/link';
import Icon from '@/components/ui/Icon';
import React from 'react';

export type StackType = {
  id: string | number;
  url?: string | null;
  name?: string | null;
  icon?: string | null;
};

const Stack = ({ stack }: { stack?: StackType[] }) => {
  /**
   * Return content with link if url is present
   *
   * @param stackItem
   * @param content
   */
  const maybeWrap = (stackItem: StackType, content: React.ReactNode) => {
    if (!stackItem?.url) {
      return content;
    }

    return (
      <Link
        key={stackItem.id}
        href={stackItem.url}
        title={stackItem.name || undefined}
        role="listitem"
        target="_blank"
        rel="noopener noreferral nofollow"
      >
        {content}
      </Link>
    );
  };

  return (
    <div className="flex gap-2" role="listbox">
      {stack?.map((contact: StackType) => maybeWrap(contact, <Icon tech={contact?.icon as any} />))}
    </div>
  );
};

export default Stack;
