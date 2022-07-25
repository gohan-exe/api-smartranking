import { CategoriasService } from './categorias.service';
import { AtualizarCategoriaDto } from './dtos/atualizar-categoria.dto';
import { criarCategoriaDto } from './dtos/criar-categoria.dto';
import { Categoria } from './interfaces/categoria.interface';
export declare class CategoriasController {
    private readonly categoriasService;
    constructor(categoriasService: CategoriasService);
    criarCategoria(criarCategoriaDto: criarCategoriaDto): Promise<Categoria>;
    consultarCategorias(): Promise<Array<Categoria>>;
    consultarCategoriasPeloId(categoria: string): Promise<Categoria>;
    atualizarCategoria(atualizarCategoriaDto: AtualizarCategoriaDto, categoria: string): Promise<void>;
    atribuirCategoriaJogador(params: string[]): Promise<void>;
}
