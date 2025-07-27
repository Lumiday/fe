const BASE_URL = process.env.NEXT_PUBLIC_DOMAIN;

function getToken(): string | null {
  return localStorage.getItem('token');
}

export async function fetchAPIClient(
  endpoint: string,
  method: 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH',
  body?: FormData | string | Record<string, unknown>
) {
  const token = getToken();

  const headers: HeadersInit = {
    accept: 'application/json;charset=UTF-8',
    ...(token && { Authorization: `Bearer ${token}` }),
    ...(body &&
      !(body instanceof FormData) && { 'Content-Type': 'application/json' }),
  };

  const options: RequestInit = {
    method,
    headers,
    ...(body && {
      body: body instanceof FormData ? body : JSON.stringify(body),
    }),
  };

  const url = `${BASE_URL}${endpoint}`;

  try {
    const response = await fetch(url, options);

    if (!response.ok) {
      const errorBody = await response.text();
      console.error('에러 바디:', errorBody);
      const error = {
        status: response.status,
        message: errorBody || '네트워크 응답이 정상적이지 않습니다',
      };
      return { error };
    }

    return response.status !== 204 ? await response.json() : null;
  } catch (error) {
    console.error('API 호출 에러 (클라이언트):', error);
    return { error };
  }
}
