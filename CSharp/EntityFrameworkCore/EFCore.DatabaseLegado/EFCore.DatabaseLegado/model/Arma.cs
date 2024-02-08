using System;
using System.Collections.Generic;

namespace EFCore.DatabaseLegado.model;

public partial class Arma
{
    public int Id { get; set; }

    public string Nome { get; set; } = null!;

    public int HeroiId { get; set; }

    public virtual Heroi Heroi { get; set; } = null!;
}
