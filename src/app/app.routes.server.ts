import { RenderMode, ServerRoute } from '@angular/ssr';

export const serverRoutes: ServerRoute[] = [
  {
    path: 'deal-details/:id',
    renderMode: RenderMode.Server // This fixes the "getPrerenderParams" error
  },
  {
    path: '**',
    renderMode: RenderMode.Prerender
  }
];