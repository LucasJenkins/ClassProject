﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace FinalProjectServer.Dtos
{
    public class FileResponseDto
    {
        public int Id { get; set; }

        public string Name { get; set; }

        public bool IsTrash { get; set; }
    }
}
