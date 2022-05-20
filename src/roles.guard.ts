import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';
import { Reflector } from '@nestjs/core';

@Injectable()
export class RolesGuard implements CanActivate {
  constructor(private reflector: Reflector) {}

  canActivate(context: ExecutionContext): boolean {
    const request = context.switchToHttp().getRequest();
    const user = request.user;
    return checkPermission(request);
  }
}
function checkPermission(request) {
  if (request.headers.authorization === '1234') {
    return true;
  } else {
    return false;
  }
}
