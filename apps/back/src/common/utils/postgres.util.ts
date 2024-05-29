import {
  BadRequestException,
  ConflictException,
  InternalServerErrorException,
} from '@nestjs/common';
import { DeepPartial, Repository } from 'typeorm';

export const createAndSaveEntry = async <Entity>(
  repository: Repository<Entity>,
  dto: DeepPartial<Entity>,
  onError?: (error) => void,
): Promise<Entity> => {
  try {
    const newEntry = repository.create(dto);

    const newEntrySaved = await repository.save(newEntry);

    return newEntrySaved as Entity;
  } catch (error) {
    onError?.(error);

    if (error.code === '23502') {
      throw new BadRequestException(error.detail);
    } else if (error.code === '23505') {
      throw new ConflictException(error.detail);
    } else if (error.code === '23503') {
      throw new BadRequestException(error.detail);
    }

    console.log({ error });

    throw new InternalServerErrorException();
  }
};

export const postgresErrorHandler = (error: any) => {
  const errorMessage = error?.detail ?? 'Unknown error';
  const errorClass =
    DB_ERROR_EXCEPTIONS?.[error.code] ?? InternalServerErrorException;
  console.log(error);
  throw new errorClass(errorMessage);
};

const DB_ERROR_EXCEPTIONS = {
  '23505': ConflictException,
};
