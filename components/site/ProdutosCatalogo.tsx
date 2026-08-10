"use client";

import { useMemo, useState } from "react";
import { Search } from "lucide-react";
import { ProductCard } from "@/components/site/ProductCard";
import { CatalogFilters } from "@/components/site/CatalogFilters";
import type { ProdutoComRelacoes } from "@/lib/types";

interface FacetOption {
  value: string;
  nome: string;
  count: number;
}

export function ProdutosCatalogo({
  produtos,
  linhas,
  categorias,
  grupos,
  activeLinha,
  activeCategoria,
  activeGrupo,
}: {
  produtos: ProdutoComRelacoes[];
  linhas: FacetOption[];
  categorias: FacetOption[];
  grupos: FacetOption[];
  activeLinha?: string;
  activeCategoria?: string;
  activeGrupo?: string;
}) {
  const [busca, setBusca] = useState("");

  const filtrados = useMemo(() => {
    if (!busca.trim()) return produtos;
    const termo = busca.trim().toLowerCase();
    return produtos.filter((p) => p.nome.toLowerCase().includes(termo));
  }, [produtos, busca]);

  return (
    <>
      <aside className="lg:w-[260px] flex-shrink-0 space-y-8">
        <div>
          <h3 className="font-barlow font-semibold text-[12px] uppercase tracking-[.12em] text-r3-heading mb-3">
            Buscar produto
          </h3>
          <div className="relative">
            <Search
              size={16}
              strokeWidth={2}
              className="absolute left-3 top-1/2 -translate-y-1/2 text-r3-muted"
            />
            <input
              type="text"
              value={busca}
              onChange={(e) => setBusca(e.target.value)}
              placeholder="Nome do produto..."
              className="w-full pl-9 pr-3 py-2.5 border border-r3-borderMuted text-[14px] text-r3-heading placeholder:text-r3-muted focus:outline-none focus:border-r3-heading"
            />
          </div>
        </div>

        <CatalogFilters
          linhas={linhas}
          categorias={categorias}
          grupos={grupos}
          activeLinha={activeLinha}
          activeCategoria={activeCategoria}
          activeGrupo={activeGrupo}
        />
      </aside>

      <div className="flex-1">
        {filtrados.length > 0 ? (
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-5">
            {filtrados.map((produto) => (
              <ProductCard key={produto.id} produto={produto} />
            ))}
          </div>
        ) : (
          <div className="border border-dashed border-r3-borderMuted py-20 text-center">
            <p className="text-[15px] text-r3-muted">
              Nenhum produto encontrado com esses filtros.
            </p>
          </div>
        )}
      </div>
    </>
  );
}
