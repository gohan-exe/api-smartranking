import { CriarJogadorDto } from './dtos/criar-jogador.dto';
import { AtualizarJogadorDto } from './dtos/atualizar-jogador.dto';
import { JogadoresService } from './jogadores.service';
import { Jogador } from './interfaces/jogador.interface';
export declare class JogadoresController {
    private readonly JogadoresService;
    constructor(JogadoresService: JogadoresService);
    criarJogador(criarJogadorDto: CriarJogadorDto): Promise<Jogador>;
    atualizarJogador(AtualizarJogadorDto: AtualizarJogadorDto, _id: string): Promise<void>;
    consultarJogadores(): Promise<Jogador[]>;
    consultarJogadorPeloID(_id: string): Promise<Jogador>;
    deletarJogador(_id: string): Promise<void>;
}
