import { service } from "../service";

interface LoginResponse {
  token: string;
  uniqueId: string;
}

export async function login(email: string, password: string): Promise<LoginResponse> {
  const response = await service<LoginResponse>('/auth/login', {
    method: 'POST',
    body: {
      email,
      password,
    },
    cache: 'no-store',
  });

  return response;
}