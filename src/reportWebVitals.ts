import { ReportHandler } from 'web-vitals';

/**
 * Enhanced Web Vitals Reporting
 * Sends performance metrics to Vercel Analytics and console
 */
const reportWebVitals = (onPerfEntry?: ReportHandler) => {
  if (onPerfEntry && onPerfEntry instanceof Function) {
    import('web-vitals').then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
      getCLS(onPerfEntry);
      getFID(onPerfEntry);
      getFCP(onPerfEntry);
      getLCP(onPerfEntry);
      getTTFB(onPerfEntry);
    });
  }
};

/**
 * Send Web Vitals to Vercel Analytics
 * This provides detailed performance tracking in the Vercel Dashboard
 */
export function sendToVercelAnalytics(metric: any) {
  // Vercel Analytics automatically captures Web Vitals via Speed Insights
  // This function logs them to console for debugging
  if (process.env.NODE_ENV === 'development') {
    console.log('📊 Web Vital:', {
      name: metric.name,
      value: metric.value,
      rating: metric.rating,
      delta: metric.delta,
      id: metric.id
    });
  }

  // You can also send to custom analytics endpoint if needed
  // Example: fetch('/api/analytics', { method: 'POST', body: JSON.stringify(metric) });
}

/**
 * Get performance rating based on metric value
 */
export function getPerformanceRating(metricName: string, value: number): 'good' | 'needs-improvement' | 'poor' {
  const thresholds: Record<string, [number, number]> = {
    CLS: [0.1, 0.25],      // Cumulative Layout Shift
    FID: [100, 300],       // First Input Delay (ms)
    FCP: [1800, 3000],     // First Contentful Paint (ms)
    LCP: [2500, 4000],     // Largest Contentful Paint (ms)
    TTFB: [800, 1800]      // Time to First Byte (ms)
  };

  const [good, poor] = thresholds[metricName] || [0, Infinity];

  if (value <= good) return 'good';
  if (value <= poor) return 'needs-improvement';
  return 'poor';
}

/**
 * Format metric value for display
 */
export function formatMetricValue(metricName: string, value: number): string {
  if (metricName === 'CLS') {
    return value.toFixed(3);
  }
  return `${Math.round(value)}ms`;
}

export default reportWebVitals;
