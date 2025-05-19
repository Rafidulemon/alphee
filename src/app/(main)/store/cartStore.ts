import { create } from "zustand";

interface CartItem {
  id: string;
  name: string;
  imageUrl: string;
  regularPrice: number;
  discountedPrice: number;
  quantity: number;
  availableSizes?: string[];
  size?: string;
}

interface CartState {
  items: CartItem[];
  addItem: (item: Omit<CartItem, "quantity">) => void;
  removeItem: (id: string) => void;
  updateQuantity: (id: string, quantity: number) => void;
  updateSize: (id: string, size: string) => void;
  getTotalItems: () => number;
  clearCart: () => void;
}

export const useCartStore = create<CartState>((set, get) => ({
  items: [],

  addItem: (item) => {
    set((state) => {
      const existing = state.items.find((i) => i.id === item.id);
      if (existing) {
        return {
          items: state.items.map((i) =>
            i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i
          ),
        };
      } else {
        return {
          items: [
            ...state.items,
            {
              ...item,
              quantity: 1,
              size: "",
              availableSizes: item.availableSizes || [],
            },
          ],
        };
      }
    });
  },

  removeItem: (id) =>
    set((state) => ({
      items: state.items.filter((item) => item.id !== id),
    })),

  updateQuantity: (id, quantity) =>
    set((state) => ({
      items: state.items.map((item) =>
        item.id === id ? { ...item, quantity: Math.max(1, quantity) } : item
      ),
    })),

  updateSize: (id, size) =>
    set((state) => ({
      items: state.items.map((item) =>
        item.id === id ? { ...item, size } : item
      ),
    })),

  getTotalItems: () =>
    get().items.reduce((total, item) => total + item.quantity, 0),

  clearCart: () => set({ items: [] }),
}));
