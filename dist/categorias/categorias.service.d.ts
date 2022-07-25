import { Model } from 'mongoose';
import { criarCategoriaDto } from './dtos/criar-categoria.dto';
import { Categoria } from './interfaces/categoria.interface';
import { AtualizarCategoriaDto } from './dtos/atualizar-categoria.dto';
import { JogadoresService } from 'src/jogadores/jogadores.service';
export declare class CategoriasService {
    private readonly categoriaModel;
    private readonly jogadoresService;
    constructor(categoriaModel: Model<Categoria>, jogadoresService: JogadoresService);
    criarCategoria(criarCategoriaDto: criarCategoriaDto): Promise<Categoria>;
    consultarTodasCategorias(): Promise<Array<Categoria>>;
    consultarCategoriaPeloId(categoria: string): Promise<Categoria>;
    atualizarCategoria(categoria: string, atualizarCategoriaDto: AtualizarCategoriaDto): Promise<void>;
    atribuirCategoriaJogador(params: string[]): Promise<void>;
}
