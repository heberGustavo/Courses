using System;
using System.Collections.Generic;

namespace EFCore.DatabaseLegado.model;

public partial class Heroi
{
    public int Id { get; set; }

    public string Nome { get; set; } = null!;

    public virtual ICollection<Arma> Armas { get; set; } = new List<Arma>();

    public virtual IdentidadesSecreta? IdentidadesSecreta { get; set; }

    public virtual ICollection<Batalha> Batalhas { get; set; } = new List<Batalha>();
}
