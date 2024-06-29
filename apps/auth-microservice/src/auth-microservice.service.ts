import { Injectable } from '@nestjs/common';

@Injectable()
export class AuthMicroserviceService {
  constructor() { }
  async createUser(data: any) {
    console.log(data, "recieved");

    return data
  }
}
