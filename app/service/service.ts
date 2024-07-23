
interface ServiceConfig {
  method: 'GET' | 'POST' | 'PUT' | 'DELETE';
  body?: any;
  headers?: any;
  cache: 'reload' | 'default' | 'no-cache' | 'force-cache' | 'only-if-cached' | 'no-store';
}

export async function service<D>(path: string, serviceConfig: ServiceConfig): Promise<D> {
  try {
    const url = process.env.NEXT_PUBLIC_API_URL + path;
    const response = await fetch(url, {
      method: serviceConfig.method,
      headers: {
        'Content-Type': 'application/json',
        ...serviceConfig.headers,
      },
      body: JSON.stringify(serviceConfig.body),
      cache: serviceConfig.cache,
    });

    if (!response.ok) {
      throw new Error('Failed to fetch data');
    }
    return await response.json();
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
}