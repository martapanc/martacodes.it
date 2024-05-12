import fs from 'fs/promises';
import matter from 'gray-matter';
import path from 'path';
import { cache } from 'react';

import { Post } from '@/types/Post';

export const getPosts = cache(async () => {
  const posts = await fs.readdir('src/posts/');

  return Promise.all(
    posts
      .filter((file) => path.extname(file) === '.mdx')
      .map(async (file) => {
        const filePath = `src/posts/${file}`;
        const postContent = await fs.readFile(filePath, 'utf-8');

        const { data, content } = matter(postContent);

        if (data.published === false) {
          return null;
        }

        return { ...data, body: content } as Post;
      }),
  );
});

export async function getPost(slug: string) {
  const posts = await getPosts();
  return posts.find((post) => post && post.slug === slug);
}

export default getPosts;
