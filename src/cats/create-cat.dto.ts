export class CreateCatDto {
  name: string;
  age: number;
  breed: string;
}

export class ListAllEntries {
  limit: number;
}

export class UpdateCatDto {
  id: number;
}
