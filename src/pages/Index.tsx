import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import Icon from '@/components/ui/icon';

const mockPlayers = [
  { 
    id: 1, 
    name: 'EnDay01', 
    kills: 59, 
    deaths: 17, 
    playtime: '23ч', 
    level: 87, 
    online: true,
    description: 'Стример и блогер по серверу MINEHAD любитель строить. Игрок харош в пвп и в пве. Очень быстро реализовывает проекты.'
  },
  { 
    id: 2, 
    name: 'Kamelia07', 
    kills: 1, 
    deaths: 31, 
    playtime: '9ч', 
    level: 76, 
    online: true,
    description: 'Очень любит животных! Лучше всех справляется в добыче животных. Не любит пвп, старается избегать его. Самый безопасный и дружелюбный игрок на сервере.'
  },
  { 
    id: 3, 
    name: 'kfcasdw', 
    kills: 4, 
    deaths: 3, 
    playtime: '6ч', 
    level: 72, 
    online: false,
    description: 'Куча идей которые ему не терпится реализовать! Быстрее всех справляется с начальными ресурсами. Хорошо строит и добывает нужные ему ресурсы.'
  },
  { 
    id: 4, 
    name: 'paata1234', 
    kills: 2, 
    deaths: 11, 
    playtime: '3ч', 
    level: 69, 
    online: true,
    description: 'Идей у него много но нет возможности их реализовать. Хорошо добывает ресурсы, но часто ленится.'
  },
  { 
    id: 5, 
    name: 'kors666', 
    kills: 0, 
    deaths: 0, 
    playtime: '0ч', 
    level: 1, 
    online: false,
    description: 'Новичок на сервере. Статистика пока не доступна.'
  },
  { 
    id: 6, 
    name: 'BleW', 
    kills: 18, 
    deaths: 7, 
    playtime: '10ч', 
    level: 62, 
    online: true,
    description: 'Игрок который пытается захватить весь сервер. Идей полно и потихоньку они реализовываются. Пытается убивать игроков, но чаще всего умирает он. Любитель тролить и издеваться над игроками. Построил 40 дверей в которых игрок запутывается и не замечает снизу блока который отсутствует и проваливаются в его трапку. Первый получил булаву на сервере.'
  },
];

const Index = () => {
  const [activeTab, setActiveTab] = useState<'players' | 'stats'>('players');
  const onlinePlayers = mockPlayers.filter(p => p.online).length;
  const totalKills = mockPlayers.reduce((acc, p) => acc + p.kills, 0);
  const totalPlaytime = '1068ч';

  return (
    <div className="min-h-screen bg-[#44403C] relative overflow-hidden">
      <div 
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `url('https://cdn.poehali.dev/projects/445c8cd5-9656-4c37-9681-d8b18385d537/files/d261b3a5-9b9b-4c35-b624-6a68afb41588.jpg')`,
          backgroundSize: '200px 200px',
          backgroundRepeat: 'repeat'
        }}
      />

      <div className="relative z-10">
        <header className="border-b-4 border-[#92400E] bg-[#292524]/90 backdrop-blur-sm">
          <div className="container mx-auto px-4 py-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <img 
                  src="https://cdn.poehali.dev/projects/445c8cd5-9656-4c37-9681-d8b18385d537/files/aa216eb8-881e-4b96-ba04-fb3ab5a98e90.jpg" 
                  alt="MINEHAD" 
                  className="h-12 w-12 rounded border-2 border-primary pixelated"
                />
                <h1 className="text-2xl md:text-3xl text-primary animate-pixel-pulse">
                  MINEHAD
                </h1>
              </div>
              <div className="flex items-center gap-2 bg-primary/20 px-4 py-2 rounded border-2 border-primary">
                <div className="h-2 w-2 rounded-full bg-primary animate-pulse" />
                <span className="text-primary font-bold text-sm md:text-base">
                  {onlinePlayers} онлайн
                </span>
              </div>
            </div>
          </div>
        </header>

        <main className="container mx-auto px-4 py-8">
          <section className="mb-12 animate-fade-in">
            <div className="bg-gradient-to-r from-[#92400E]/80 to-[#44403C]/80 backdrop-blur rounded-lg border-4 border-[#FCD34D] p-8 md:p-12 text-center relative overflow-hidden">
              <div className="absolute inset-0 bg-[url('https://cdn.poehali.dev/projects/445c8cd5-9656-4c37-9681-d8b18385d537/files/d261b3a5-9b9b-4c35-b624-6a68afb41588.jpg')] opacity-5 bg-repeat" style={{ backgroundSize: '100px' }} />
              <div className="relative z-10">
                <h2 className="text-3xl md:text-5xl text-[#FCD34D] mb-4 animate-float">
                  Сервер MINEHAD
                </h2>
                <p className="text-secondary text-lg md:text-xl mb-6 font-medium">
                  Лучшие игроки и статистика сервера
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                  <div className="bg-[#292524]/90 px-6 py-3 rounded border-2 border-primary">
                    <div className="text-[#FCD34D] text-sm">Всего убийств</div>
                    <div className="text-primary text-2xl font-bold">{totalKills}</div>
                  </div>
                  <div className="bg-[#292524]/90 px-6 py-3 rounded border-2 border-primary">
                    <div className="text-[#FCD34D] text-sm">Время игры</div>
                    <div className="text-primary text-2xl font-bold">{totalPlaytime}</div>
                  </div>
                  <div className="bg-[#292524]/90 px-6 py-3 rounded border-2 border-primary">
                    <div className="text-[#FCD34D] text-sm">Игроков</div>
                    <div className="text-primary text-2xl font-bold">{mockPlayers.length}</div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <div className="flex gap-4 mb-8 flex-wrap">
            <button
              onClick={() => setActiveTab('players')}
              className={`px-6 py-3 font-bold text-lg border-4 transition-all ${
                activeTab === 'players'
                  ? 'bg-primary text-[#44403C] border-primary'
                  : 'bg-[#292524] text-secondary border-[#92400E] hover:border-primary'
              }`}
            >
              👥 ИГРОКИ
            </button>
            <button
              onClick={() => setActiveTab('stats')}
              className={`px-6 py-3 font-bold text-lg border-4 transition-all ${
                activeTab === 'stats'
                  ? 'bg-primary text-[#44403C] border-primary'
                  : 'bg-[#292524] text-secondary border-[#92400E] hover:border-primary'
              }`}
            >
              📊 СТАТИСТИКА
            </button>
          </div>

          {activeTab === 'players' && (
            <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 animate-fade-in">
              {mockPlayers.map((player, index) => (
                <Card 
                  key={player.id} 
                  className="bg-[#292524]/90 border-4 border-[#92400E] hover:border-primary transition-all hover:scale-105 overflow-hidden"
                >
                  <div className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center gap-3">
                        <img 
                          src="https://cdn.poehali.dev/projects/445c8cd5-9656-4c37-9681-d8b18385d537/files/e4c5182b-86e6-4059-ab42-ced7234006df.jpg"
                          alt={player.name}
                          className="h-12 w-12 rounded border-2 border-primary pixelated"
                        />
                        <div>
                          <h3 className="text-lg font-bold text-[#FCD34D]">
                            #{index + 1} {player.name}
                          </h3>
                          <Badge 
                            variant={player.online ? "default" : "secondary"}
                            className={player.online ? 'bg-primary text-[#44403C]' : 'bg-muted text-muted-foreground'}
                          >
                            {player.online ? '🟢 Онлайн' : '⚫ Оффлайн'}
                          </Badge>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-3">
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-secondary flex items-center gap-2">
                          <Icon name="Sword" size={16} className="text-primary" />
                          Убийств
                        </span>
                        <span className="text-primary font-bold">{player.kills}</span>
                      </div>
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-secondary flex items-center gap-2">
                          <Icon name="Skull" size={16} className="text-destructive" />
                          Смертей
                        </span>
                        <span className="text-secondary font-bold">{player.deaths}</span>
                      </div>
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-secondary flex items-center gap-2">
                          <Icon name="Clock" size={16} className="text-accent" />
                          Время игры
                        </span>
                        <span className="text-accent font-bold">{player.playtime}</span>
                      </div>
                      <div className="pt-2">
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-secondary text-sm">Уровень</span>
                          <span className="text-primary font-bold">{player.level}</span>
                        </div>
                        <Progress value={player.level} className="h-3 bg-[#44403C]" />
                      </div>
                      
                      <div className="pt-3 mt-3 border-t-2 border-[#92400E]">
                        <p className="text-secondary text-xs leading-relaxed">
                          {player.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </section>
          )}

          {activeTab === 'stats' && (
            <section className="space-y-6 animate-fade-in">
              <Card className="bg-[#292524]/90 border-4 border-[#92400E] p-6">
                <h3 className="text-2xl text-[#FCD34D] mb-6">📈 Общая статистика</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-[#44403C]/50 p-6 rounded border-2 border-primary">
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-secondary text-lg">Среднее K/D</span>
                      <Icon name="TrendingUp" size={24} className="text-primary" />
                    </div>
                    <div className="text-4xl font-bold text-primary">2.73</div>
                  </div>
                  
                  <div className="bg-[#44403C]/50 p-6 rounded border-2 border-accent">
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-secondary text-lg">Среднее время</span>
                      <Icon name="Clock" size={24} className="text-accent" />
                    </div>
                    <div className="text-4xl font-bold text-accent">178ч</div>
                  </div>

                  <div className="bg-[#44403C]/50 p-6 rounded border-2 border-[#FCD34D]">
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-secondary text-lg">Всего игроков</span>
                      <Icon name="Users" size={24} className="text-[#FCD34D]" />
                    </div>
                    <div className="text-4xl font-bold text-[#FCD34D]">{mockPlayers.length}</div>
                  </div>

                  <div className="bg-[#44403C]/50 p-6 rounded border-2 border-primary">
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-secondary text-lg">Онлайн сейчас</span>
                      <Icon name="Wifi" size={24} className="text-primary" />
                    </div>
                    <div className="text-4xl font-bold text-primary">{onlinePlayers}</div>
                  </div>
                </div>
              </Card>

              <Card className="bg-[#292524]/90 border-4 border-[#92400E] p-6">
                <h3 className="text-2xl text-[#FCD34D] mb-6">🏆 Топ по убийствам</h3>
                <div className="space-y-4">
                  {mockPlayers.slice(0, 3).map((player, index) => (
                    <div 
                      key={player.id}
                      className="flex items-center justify-between bg-[#44403C]/50 p-4 rounded border-2 border-primary hover:scale-105 transition-transform"
                    >
                      <div className="flex items-center gap-4">
                        <div className={`text-3xl font-bold ${
                          index === 0 ? 'text-[#FCD34D]' : 
                          index === 1 ? 'text-[#C0C0C0]' : 
                          'text-[#CD7F32]'
                        }`}>
                          #{index + 1}
                        </div>
                        <div>
                          <div className="text-secondary font-bold">{player.name}</div>
                          <div className="text-sm text-muted-foreground">Уровень {player.level}</div>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-2xl font-bold text-primary">{player.kills}</div>
                        <div className="text-sm text-secondary">убийств</div>
                      </div>
                    </div>
                  ))}
                </div>
              </Card>
            </section>
          )}
        </main>

        <footer className="border-t-4 border-[#92400E] bg-[#292524]/90 backdrop-blur-sm mt-12">
          <div className="container mx-auto px-4 py-8">
            <div className="text-center">
              <p className="text-secondary text-lg mb-2">
                🎮 Сервер MINEHAD - Лучший игровой опыт
              </p>
              <p className="text-muted-foreground text-sm">
                Статистика обновляется в реальном времени
              </p>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Index;