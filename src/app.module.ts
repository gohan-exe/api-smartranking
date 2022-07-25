import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { JogadoresModule } from './jogadores/jogadores.module';
import { CategoriasModule } from './categorias/categorias.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb+srv://Danone:Emperorsuit117343@cluster0.dmz0a.mongodb.net/smartranking?retryWrites=true&w=majority',
    {}),
    JogadoresModule,
    CategoriasModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
