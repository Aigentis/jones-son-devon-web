
import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";

export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  content: string;
  excerpt: string;
  featured_image: string;
  published: boolean;
  published_at: string;
  created_at: string;
  category: string;
  tags: string[];
  location: string;
  seo_title?: string;
  seo_description?: string;
}

export interface Category {
  id: string;
  name: string;
  slug: string;
  description: string;
}

export const useBlogPosts = (category?: string) => {
  return useQuery({
    queryKey: ['blog-posts', category],
    queryFn: async () => {
      let query = supabase
        .from('blog_posts')
        .select('*')
        .eq('published', true)
        .order('published_at', { ascending: false });

      if (category && category !== 'All') {
        query = query.eq('category', category);
      }

      const { data, error } = await query;
      
      if (error) {
        console.error('Error fetching blog posts:', error);
        throw error;
      }
      
      return data as BlogPost[];
    },
  });
};

export const useCategories = () => {
  return useQuery({
    queryKey: ['categories'],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('categories')
        .select('*')
        .order('name');
      
      if (error) {
        console.error('Error fetching categories:', error);
        throw error;
      }
      
      return data as Category[];
    },
  });
};

export const useBlogPost = (slug: string) => {
  return useQuery({
    queryKey: ['blog-post', slug],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('blog_posts')
        .select('*')
        .eq('slug', slug)
        .eq('published', true)
        .single();
      
      if (error) {
        console.error('Error fetching blog post:', error);
        throw error;
      }
      
      return data as BlogPost;
    },
  });
};
