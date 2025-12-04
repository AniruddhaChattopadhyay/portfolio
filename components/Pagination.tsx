'use client';

import React from 'react';
import Link from 'next/link';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { cn } from '@/lib/utils';

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  basePath: string;
}

export function Pagination({ currentPage, totalPages, basePath }: PaginationProps) {
  if (totalPages <= 1) return null;

  const getPageNumbers = () => {
    const pages: (number | string)[] = [];
    const showEllipsis = totalPages > 7;

    if (!showEllipsis) {
      // Show all pages if 7 or fewer
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      // Always show first page
      pages.push(1);

      if (currentPage > 3) {
        pages.push('...');
      }

      // Show pages around current
      const start = Math.max(2, currentPage - 1);
      const end = Math.min(totalPages - 1, currentPage + 1);

      for (let i = start; i <= end; i++) {
        if (!pages.includes(i)) {
          pages.push(i);
        }
      }

      if (currentPage < totalPages - 2) {
        pages.push('...');
      }

      // Always show last page
      if (!pages.includes(totalPages)) {
        pages.push(totalPages);
      }
    }

    return pages;
  };

  const getPageUrl = (page: number) => {
    return page === 1 ? basePath : `${basePath}?page=${page}`;
  };

  return (
    <nav className="flex items-center justify-center gap-2 mt-12" aria-label="Pagination">
      {/* Previous Button */}
      <Link
        href={getPageUrl(Math.max(1, currentPage - 1))}
        className={cn(
          "flex items-center gap-1 px-3 py-2 rounded-lg text-sm font-medium transition-colors",
          currentPage === 1
            ? "text-gray-400 pointer-events-none"
            : "text-gray-700 hover:bg-gray-100"
        )}
        aria-disabled={currentPage === 1}
      >
        <ChevronLeft className="h-4 w-4" />
        <span className="hidden sm:inline">Previous</span>
      </Link>

      {/* Page Numbers */}
      <div className="flex items-center gap-1">
        {getPageNumbers().map((page, index) => (
          typeof page === 'number' ? (
            <Link
              key={page}
              href={getPageUrl(page)}
              className={cn(
                "min-w-[40px] h-10 flex items-center justify-center rounded-lg text-sm font-medium transition-colors",
                currentPage === page
                  ? "bg-primary-600 text-white"
                  : "text-gray-700 hover:bg-gray-100"
              )}
              aria-current={currentPage === page ? 'page' : undefined}
            >
              {page}
            </Link>
          ) : (
            <span
              key={`ellipsis-${index}`}
              className="min-w-[40px] h-10 flex items-center justify-center text-gray-400"
            >
              {page}
            </span>
          )
        ))}
      </div>

      {/* Next Button */}
      <Link
        href={getPageUrl(Math.min(totalPages, currentPage + 1))}
        className={cn(
          "flex items-center gap-1 px-3 py-2 rounded-lg text-sm font-medium transition-colors",
          currentPage === totalPages
            ? "text-gray-400 pointer-events-none"
            : "text-gray-700 hover:bg-gray-100"
        )}
        aria-disabled={currentPage === totalPages}
      >
        <span className="hidden sm:inline">Next</span>
        <ChevronRight className="h-4 w-4" />
      </Link>
    </nav>
  );
}

