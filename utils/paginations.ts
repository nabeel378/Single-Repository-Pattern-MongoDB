process.env.BASE_URL='localhost:4000'
export interface IPaginated<T> {
    list: T[];
    limit: number;
    pageNumber: number;
    next: string;
    previous: string;
  }
  
  export default function paginate<T>(documents: T[], limit: number, pageNumber: number, path: string ): IPaginated<T> {
    return {
      list: documents,
      limit,
      pageNumber,
      next: documents.length < limit ? '' : `${process.env.BASE_URL}${path}?page=${pageNumber + 1}`,
      previous: (pageNumber > 1) ? `${process.env.BASE_URL}${path}?page=${pageNumber - 1}` : '',
    };
  }
  