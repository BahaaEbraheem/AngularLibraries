export class Book {
  Id!: number;
  Title!: string;
  TotalPages!: number
  Price!: number;
  PublishedDate?: Date;
  AuthorName!: string;
  Language!: string;
  CreatedOn?: Date;
  IsDeleted!: boolean;
}
