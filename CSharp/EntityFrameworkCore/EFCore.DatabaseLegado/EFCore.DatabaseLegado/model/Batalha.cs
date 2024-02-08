using System;
using System.Collections.Generic;

namespace EFCore.DatabaseLegado.model;

public partial class Batalha
{
    public int Id { get; set; }

    public string Nome { get; set; } = null!;

    public string Descricao { get; set; } = null!;

    public DateTime DtInicio { get; set; }

    public DateTime DtFim { get; set; }

    public virtual ICollection<Heroi> Herois { get; set; } = new List<Heroi>();
}
