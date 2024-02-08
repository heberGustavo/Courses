using System;
using System.Collections.Generic;

namespace EFCore.DatabaseLegado.model;

public partial class IdentidadesSecreta
{
    public int Id { get; set; }

    public string NomeReal { get; set; } = null!;

    public int HeroiId { get; set; }

    public virtual Heroi Heroi { get; set; } = null!;
}
