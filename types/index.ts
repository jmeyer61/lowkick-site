// ~/types/index.ts

export type Logo = {
  data: {
    id: number;
    attributes: {
      createdAt: string;
      updatedAt: string;
      publishedAt: string;
      Image: object;
    };
  };
  meta: object;
};
