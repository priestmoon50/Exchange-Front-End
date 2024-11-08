// src/types.ts
export interface PriceData {
  id: number;
  fa_name: string;
  price: string;
  daily_change_percent: string;
  buy_irt_price: string;
  sell_irt_price: string;
  icon: string;
}


export interface TableProps {
  headers: Array<string | JSX.Element>;
  children: React.ReactNode;
  searchBar: JSX.Element;
}


export interface SearchBarProps {
  searchTerm: string;
  setSearchTerm: (term: string) => void;
}


export interface PaginationProps {
  currentPage: number;
  totalPages: number;
  setCurrentPage: (page: number) => void;
}





export interface NavItemsProps {
  activeItem: string;
  onNavClick: (item: string) => void;
}

export interface MobileMenuButtonProps {
  onClick: () => void;
}

export interface MobileDrawerProps {
  activeItem: string;
  onClose: () => void;
  onNavClick: (item: string) => void;
}