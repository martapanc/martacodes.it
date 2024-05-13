import Link from 'next/link';

import { Post } from '@/types/Post';

type PostPreviewProps = {
  post: Post;
};

export default function PostPreview({ post }: PostPreviewProps) {
  return (
    <div className='my-3'>
      <Link href={`/blog/${post.slug}`}>
        <h1>{post.title}</h1>
        <div>{post.date}</div>
        <div>{post.description}</div>
      </Link>
    </div>
  );
}
