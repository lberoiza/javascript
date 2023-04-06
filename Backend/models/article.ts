import mongoose, { Document, Model, Schema } from 'mongoose';

// Definición de la interfaz IArticle que extiende la interfaz Document de Mongoose
export interface IArticle extends Document {
  title: string;
  content: string;
  date: Date;
  image: string;
  getFormattedDate: () => string;
}

// Definición del esquema de Mongoose para el modelo Article
const ArticleSchema: Schema = new Schema({
  title: String,
  content: String,
  date: { type: Date, default: Date.now },
  image: String
});


// Definición del método personalizado getFormattedDate en la interfaz IArticle
ArticleSchema.methods.getFormattedDate = function(): string {
  const date = this.date.toLocaleDateString('es-ES', { year: 'numeric', month: 'long', day: 'numeric' });
  return date;
};


// Creación del modelo Article a partir del esquema y la interfaz IArticle
const Article: Model<IArticle> = mongoose.model<IArticle>('Article', ArticleSchema);

// Exportación del modelo Article como valor predeterminado
export default Article;