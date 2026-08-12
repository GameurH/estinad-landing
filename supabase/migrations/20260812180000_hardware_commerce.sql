-- ESTINAD Certified Hardware — request and COD order persistence
-- RLS enabled; browser roles have no direct access.
-- Writes go through Next.js route handlers using the service-role key.

create extension if not exists pgcrypto;

create table if not exists public.hardware_quote_requests (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),
  full_name text not null,
  company_name text not null,
  email text not null,
  phone text not null,
  country text not null,
  city text not null,
  business_type text not null,
  product_interest text not null,
  locations text not null,
  counters text not null,
  kit text not null,
  existing_hardware text not null,
  installation text not null,
  notes text not null default '',
  consent boolean not null default false,
  locale text,
  source text not null default 'website'
);

create table if not exists public.hardware_compatibility_requests (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),
  full_name text not null,
  company_name text not null,
  email text not null,
  phone text not null,
  country text not null,
  city text not null,
  business_type text not null,
  product_interest text not null,
  equipment_summary text not null,
  notes text not null default '',
  consent boolean not null default false,
  locale text,
  source text not null default 'website'
);

create table if not exists public.hardware_orders (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),
  reference text not null unique,
  status text not null default 'pending_cod'
    check (status in ('pending_cod', 'confirmed', 'fulfilled', 'cancelled')),
  payment_method text not null default 'cod' check (payment_method = 'cod'),
  fulfillment_method text not null check (fulfillment_method in ('delivery', 'pickup')),
  full_name text not null,
  company_name text not null,
  email text not null,
  phone text not null,
  country text not null,
  city text not null,
  address text,
  notes text not null default '',
  currency text not null,
  subtotal_minor integer not null check (subtotal_minor >= 0),
  delivery_cost_minor integer not null default 0 check (delivery_cost_minor >= 0),
  total_minor integer not null check (total_minor >= 0),
  locale text,
  consent boolean not null default false,
  source text not null default 'website'
);

create table if not exists public.hardware_order_items (
  id uuid primary key default gen_random_uuid(),
  order_id uuid not null references public.hardware_orders (id) on delete cascade,
  slug text not null,
  sku text not null,
  name text not null,
  quantity integer not null check (quantity > 0),
  unit_price_minor integer not null check (unit_price_minor >= 0),
  line_total_minor integer not null check (line_total_minor >= 0),
  currency text not null
);

create index if not exists hardware_quote_requests_created_at_idx
  on public.hardware_quote_requests (created_at desc);
create index if not exists hardware_compatibility_requests_created_at_idx
  on public.hardware_compatibility_requests (created_at desc);
create index if not exists hardware_orders_created_at_idx
  on public.hardware_orders (created_at desc);
create index if not exists hardware_orders_reference_idx
  on public.hardware_orders (reference);
create index if not exists hardware_order_items_order_id_idx
  on public.hardware_order_items (order_id);

alter table public.hardware_quote_requests enable row level security;
alter table public.hardware_compatibility_requests enable row level security;
alter table public.hardware_orders enable row level security;
alter table public.hardware_order_items enable row level security;

-- No policies for anon/authenticated: only service-role (bypasses RLS) writes via API.
revoke all on table public.hardware_quote_requests from anon, authenticated;
revoke all on table public.hardware_compatibility_requests from anon, authenticated;
revoke all on table public.hardware_orders from anon, authenticated;
revoke all on table public.hardware_order_items from anon, authenticated;
