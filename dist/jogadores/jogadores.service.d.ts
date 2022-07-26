import { CriarJogadorDto } from './dtos/criar-jogador.dto';
import { Jogador } from './interfaces/jogador.interface';
import { AtualizarJogadorDto } from './dtos/atualizar-jogador.dto';
import { Model } from 'mongoose';
export declare class JogadoresService {
    private readonly jogadorModel;
    constructor(jogadorModel: Model<Jogador>);
    private readonly logger;
    criarJogador(criaJogadorDto: CriarJogadorDto): Promise<Jogador>;
    atualizarJogador(_id: string, AtualizarJogadorDto: AtualizarJogadorDto): Promise<void>;
    consultarTodosJogadores(): Promise<Jogador[]>;
    consultarJogadorPeloId(_id: string): Promise<Jogador>;
    deletarJogador(_id: any): Promise<any>;
}
