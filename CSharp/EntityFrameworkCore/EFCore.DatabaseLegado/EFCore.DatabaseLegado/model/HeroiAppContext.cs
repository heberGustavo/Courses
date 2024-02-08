using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;

namespace EFCore.DatabaseLegado.model;

public partial class HeroiAppContext : DbContext
{
    public HeroiAppContext()
    {
    }

    public HeroiAppContext(DbContextOptions<HeroiAppContext> options)
        : base(options)
    {
    }

    public virtual DbSet<Arma> Armas { get; set; }

    public virtual DbSet<Batalha> Batalhas { get; set; }

    public virtual DbSet<Heroi> Herois { get; set; }

    public virtual DbSet<IdentidadesSecreta> IdentidadesSecretas { get; set; }

    protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        => optionsBuilder.UseSqlServer("Password=root;Persist Security Info=True;User ID=root;Initial Catalog=HeroiApp;Data Source=DESKTOP-N25IT39\\SQLEXPRESS;TrustServerCertificate=True;");

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder.Entity<Arma>(entity =>
        {
            entity.HasIndex(e => e.HeroiId, "IX_Armas_HeroiId");

            entity.HasOne(d => d.Heroi).WithMany(p => p.Armas).HasForeignKey(d => d.HeroiId);
        });

        modelBuilder.Entity<Batalha>(entity =>
        {
            entity.HasMany(d => d.Herois).WithMany(p => p.Batalhas)
                .UsingEntity<Dictionary<string, object>>(
                    "HeroisBatalha",
                    r => r.HasOne<Heroi>().WithMany().HasForeignKey("HeroiId"),
                    l => l.HasOne<Batalha>().WithMany().HasForeignKey("BatalhaId"),
                    j =>
                    {
                        j.HasKey("BatalhaId", "HeroiId");
                        j.ToTable("HeroisBatalhas");
                        j.HasIndex(new[] { "HeroiId" }, "IX_HeroisBatalhas_HeroiId");
                    });
        });

        modelBuilder.Entity<IdentidadesSecreta>(entity =>
        {
            entity.HasIndex(e => e.HeroiId, "IX_IdentidadesSecretas_HeroiId").IsUnique();

            entity.HasOne(d => d.Heroi).WithOne(p => p.IdentidadesSecreta).HasForeignKey<IdentidadesSecreta>(d => d.HeroiId);
        });

        OnModelCreatingPartial(modelBuilder);
    }

    partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
}
