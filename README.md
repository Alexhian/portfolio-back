# 📌 Portfolio - Documentation

## 🔙 Backend

### 🚀 Installation et Lancement

#### 📌 Prérequis
- **Node.js** et **MySQL** installés

#### 📥 Installation
```sh
# Cloner le repo
git clone git@github.com:Alexhian/portfolio-back.git
cd backend

# Installer les dépendances
npm install
```

#### 🛠️ Configuration de la base de données
- 📂 **Créer une base de données MySQL**
- ✏️ **Créer le fichier `.env`** avec les identifiants de la base de données

#### ▶️ Lancer le serveur backend
```sh
npm run dev
```

### 🛠️ Technologies Utilisées
- 🚀 **Node.js avec Express**
- 🗄️ **MySQL**
- 🔐 **JWT** pour l'authentification

### 🌐 API - Routes Principales
| Méthode | Route | Description |
|---------|----------------|--------------------------------|
| `GET` | `/` | 🔍 Récupérer les projets |
| `POST` | `/` | ➕ Ajouter un projet |
| `PUT` | `/:id` | ✏️ Modifier un projet |
| `DELETE` | `/:id` | ❌ Supprimer un projet |

📌 **Auteur**: *Alexandre Hiance* - ✨ *[LinkedIn](https://www.linkedin.com/in/alexandre-hiance-111718151/)* - 🐙 *[GitHub](https://github.com/Alexhian)*