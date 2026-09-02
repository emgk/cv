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
      return <span key={stackItem.id}>{content}</span>;
    }

    return (
      <Link
        key={stackItem.id}
        href={stackItem.url}
        aria-label={stackItem.name || undefined}
        role="listitem"
        target="_blank"
        rel="noopener noreferrer nofollow"
        className="text-cv-text hover:text-cv-link transition-colors"
      >
        {content}
      </Link>
    );
  };

  return (
    <ul className="flex gap-2 list-none" role="list" aria-label="Tech stack">
      {stack?.map((item: StackType) => (
        <li key={item.id}>
          {maybeWrap(item, <Icon tech={item?.icon as any} />)}
        </li>
      ))}
    </ul>
  );
};

export default Stack;
