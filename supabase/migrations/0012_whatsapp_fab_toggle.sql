-- Permite ativar/desativar o botão flutuante do WhatsApp (bolha, canto
-- inferior direito, aparece em toda página do site) direto pelo admin.

alter table conteudo_site drop constraint conteudo_site_tipo_check;
alter table conteudo_site add constraint conteudo_site_tipo_check
  check (tipo in ('imagem', 'texto', 'toggle'));

insert into conteudo_site (chave, tipo, valor, descricao) values
  ('whatsapp_fab_ativo', 'toggle', 'true', 'Mostrar o botão flutuante do WhatsApp (bolha) em todas as páginas do site')
on conflict (chave) do nothing;
