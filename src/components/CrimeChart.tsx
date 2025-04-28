import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';

const CrimeChart: React.FC = () => {
  const chartRef = useRef<HTMLCanvasElement | null>(null);
  const chartInstance = useRef<Chart | null>(null);

  useEffect(() => {
    if (!chartRef.current) return;
    
    const ctx = chartRef.current.getContext('2d');
    if (!ctx) return;
    
    // Destroy existing chart if it exists
    if (chartInstance.current) {
      chartInstance.current.destroy();
    }
    
    // Mock data
    const labels = ['Theft', 'Assault', 'Burglary', 'Fraud', 'Vandalism', 'Robbery'];
    const data = [132, 87, 64, 98, 43, 76];
    
    // Create chart
    chartInstance.current = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: labels,
        datasets: [{
          label: 'Crime Count',
          data: data,
          backgroundColor: [
            'rgba(59, 130, 246, 0.7)', // blue
            'rgba(239, 68, 68, 0.7)',  // red
            'rgba(16, 185, 129, 0.7)', // green
            'rgba(245, 158, 11, 0.7)', // amber
            'rgba(139, 92, 246, 0.7)', // purple
            'rgba(14, 165, 233, 0.7)'  // sky
          ],
          borderColor: [
            'rgb(59, 130, 246)',
            'rgb(239, 68, 68)',
            'rgb(16, 185, 129)',
            'rgb(245, 158, 11)',
            'rgb(139, 92, 246)',
            'rgb(14, 165, 233)'
          ],
          borderWidth: 1
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            display: false
          }
        },
        scales: {
          y: {
            beginAtZero: true,
            grid: {
              color: 'rgba(255, 255, 255, 0.1)'
            },
            ticks: {
              color: 'rgba(255, 255, 255, 0.7)'
            }
          },
          x: {
            grid: {
              display: false
            },
            ticks: {
              color: 'rgba(255, 255, 255, 0.7)'
            }
          }
        }
      }
    });
    
    return () => {
      if (chartInstance.current) {
        chartInstance.current.destroy();
      }
    };
  }, []);

  return (
    <div className="h-80">
      <canvas ref={chartRef}></canvas>
    </div>
  );
};

export default CrimeChart;