# 🎬 VlabFlix

VlabFlix é uma aplicação Angular para exibir filmes populares usando a [API do TMDB](https://www.themoviedb.org/documentation/api).
Ela conta com carrossel de filmes, filtro lateral e exibição de gêneros dinâmicos.

---

## 🚀 Funcionalidades

* 🎥 Exibe filmes populares do TMDB
* 🏷️ Mostra os gêneros dos filmes dinamicamente
* 🖼️ Carrossel responsivo para navegação entre os filmes
* 🛠️ Estrutura organizada com **MovieService** e **componentes modulares**
* 🔐 Token do TMDB configurado via **environment** para maior segurança

---

## 📦 Requisitos

* Node.js >= 18
* Angular CLI >= 16
* Conta e Token da API do TMDB

---

## ⚙️ Configuração do Ambiente

1. **Clone o projeto**:

   ```bash
   git clone https://github.com/seu-repo/vlabflix.git
   cd vlabflix
   ```

2. **Instale as dependências**:

   ```bash
   npm install
   ```

3. **Configure seu token da API do TMDB**:

   * Edite o arquivo `src/environments/environment.ts`:

     ```ts
     export const environment = {
       production: false,
       apiUrl: 'https://api.themoviedb.org/3',
       tmdbToken: 'SEU_TOKEN_AQUI'
     };
     ```

   * E no `src/environments/environment.prod.ts`:

     ```ts
     export const environment = {
       production: true,
       apiUrl: 'https://api.themoviedb.org/3',
       tmdbToken: 'SEU_TOKEN_AQUI'
     };
     ```

---

## 📡 Serviços

O serviço principal para consumir a API do TMDB é o **MovieService**:

```ts
@Injectable({
  providedIn: 'root'
})
export class MovieService {
  private apiUrl = environment.apiUrl;
  private accessToken = environment.tmdbToken;
  http = inject(HttpClient);

  private getHeaders() {
    return {
      'accept': 'application/json',
      'Authorization': `Bearer ${this.accessToken}`
    };
  }

  getMovies(): Observable<any> {
    return this.http.get<any>(
      `${this.apiUrl}/discover/movie?language=en-US&sort_by=popularity.desc&page=1&include_adult=false&include_video=true`,
      { headers: this.getHeaders() }
    );
  }

  getGenres(): Observable<any> {
    return this.http.get<any>(
      `${this.apiUrl}/genre/movie/list?language=pt-BR`,
      { headers: this.getHeaders() }
    );
  }
}
```

---

## 🖥️ Executando o projeto

```bash
ng serve
```

Acesse em: [http://localhost:4200](http://localhost:4200)

---

## 📂 Estrutura de Pastas

```
src/
 ├── app/
 │   ├── core/           # Componentes principais (Header, Carrossel)
 │   ├── shared/         # Serviços e modelos
 │   ├── features/       # Funcionalidades específicas
 │   └── home/           # Página principal (HomeComponent)
 ├── environments/       # Configurações de ambiente
```

---

## 🔐 Segurança

* O token do TMDB **não deve ser exposto no código-fonte** diretamente.
* Para ambientes de produção, considere criar um **backend** para armazenar o token e proteger a API.

---

## 📝 Licença

Este projeto é de uso pessoal e acadêmico.
Para mais detalhes sobre a API do TMDB, consulte a [documentação oficial](https://developers.themoviedb.org/3).


