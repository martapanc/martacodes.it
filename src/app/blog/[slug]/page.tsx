import { notFound } from 'next/navigation';

import getPosts, { getPost } from '@/lib/get-posts';

import { PostBody } from '@/components/organisms/blog/PostBody';

export async function generateStaticParams() {
  const posts = await getPosts();
  return posts.map((post) => post && { slug: post.slug });
}

export default async function PostPage({
  params,
}: {
  params: { slug: string };
}) {
  const post = await getPost(params.slug);

  if (!post) return notFound();

  return <PostBody>{post?.body}</PostBody>;
}
