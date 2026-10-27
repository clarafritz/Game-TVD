import type { Scene } from '../engine/types';

export const episode01: Scene[] = [
  {
    "id": "ep01_scene01",
    "title": "Un nouveau matin",
    "background": "bedroom",
    "start": "n0",
    "nodes": [
      {
        "id": "n0",
        "type": "line",
        "line": {
          "speaker": "journal",
          "text": "Cher journal, il y a quatre mois, mes parents sont morts. Aujourd’hui, je retourne au lycée. Tout le monde veut savoir si je vais bien. J’aimerais pouvoir répondre honnêtement."
        }
      },
      {
        "id": "n1",
        "type": "line",
        "line": {
          "speaker": "thought",
          "text": "Un jour à la fois. Je peux au moins essayer."
        }
      },
      {
        "id": "n2",
        "type": "outfit"
      },
      {
        "id": "n3",
        "type": "line",
        "line": {
          "speaker": "narration",
          "text": "Dans la cuisine, Jenna essaie de sauver un petit-déjeuner improvisé."
        }
      },
      {
        "id": "n4",
        "type": "line",
        "line": {
          "speaker": "jenna",
          "text": "Elena ! Tu es déjà levée ? J’ai préparé des pancakes. Enfin… quelque chose qui y ressemble.",
          "expression": "sourire"
        }
      },
      {
        "id": "n5",
        "type": "line",
        "line": {
          "speaker": "jeremy",
          "text": "Le détecteur de fumée n’a pas apprécié.",
          "expression": "neutre"
        }
      },
      {
        "id": "n6",
        "type": "line",
        "line": {
          "speaker": "jenna",
          "text": "Merci pour ton soutien, Jeremy. Elena… prête pour la rentrée ?",
          "expression": "inquiete"
        }
      },
      {
        "id": "more_00_00",
        "type": "line",
        "line": {
          "speaker": "jenna",
          "text": "Je t’ai laissé un mot sur le frigo avec les numéros importants."
        }
      },
      {
        "id": "more_00_01",
        "type": "line",
        "line": {
          "speaker": "elena",
          "text": "Jenna, je connais le numéro de la maison."
        }
      },
      {
        "id": "more_00_02",
        "type": "line",
        "line": {
          "speaker": "jenna",
          "text": "Je sais. Je voulais juste être sûre."
        }
      },
      {
        "id": "more_00_03",
        "type": "line",
        "line": {
          "speaker": "jeremy",
          "text": "Tu pourrais aussi lui donner le numéro des pompiers, vu tes pancakes."
        }
      },
      {
        "id": "more_00_04",
        "type": "line",
        "line": {
          "speaker": "jenna",
          "text": "Très drôle."
        }
      },
      {
        "id": "more_00_05",
        "type": "line",
        "line": {
          "speaker": "thought",
          "text": "Je voudrais que cette plaisanterie suffise à faire revenir les matins d’avant."
        }
      },
      {
        "id": "v7_transition_00_00",
        "type": "line",
        "line": {
          "speaker": "jenna",
          "text": "Alors, Elena, comment tu te sens à l’idée de retourner au lycée ?"
        }
      },
      {
        "id": "n7",
        "type": "choice",
        "choices": [
          {
            "label": "« Ne t’inquiète pas. Ça va aller. »",
            "lines": [
              {
                "speaker": "elena",
                "text": "Ne t’inquiète pas, Jenna. Ça va aller."
              }
            ],
            "effects": [
              {
                "person": "jenna",
                "stat": "trust",
                "amount": 1
              }
            ],
            "flags": {
              "jenna_morning_response": "reassure"
            }
          },
          {
            "label": "« C’est juste une journée de cours. »",
            "lines": [
              {
                "speaker": "elena",
                "text": "C’est juste une journée de cours. Rien de spécial."
              }
            ],
            "flags": {
              "jenna_morning_response": "hide"
            }
          },
          {
            "label": "« Tu n’as pas à t’inquiéter tout le temps. »",
            "lines": [
              {
                "speaker": "elena",
                "text": "Tu n’as pas besoin de t’inquiéter pour moi tout le temps."
              }
            ],
            "effects": [
              {
                "person": "jenna",
                "stat": "trust",
                "amount": -1
              }
            ],
            "flags": {
              "jenna_morning_response": "distance"
            }
          }
        ]
      },
      {
        "id": "n8",
        "type": "line",
        "line": {
          "speaker": "jenna",
          "text": "Tu peux m’en parler, tu sais. Même si je ne suis pas très douée pour tout ça."
        }
      },
      {
        "id": "n9",
        "type": "line",
        "line": {
          "speaker": "jenna",
          "text": "Jeremy, tu as mangé quelque chose ?"
        }
      },
      {
        "id": "n10",
        "type": "line",
        "line": {
          "speaker": "jeremy",
          "text": "Pas faim. Et non, je n’ai pas besoin d’un interrogatoire.",
          "expression": "colere"
        }
      },
      {
        "id": "n11",
        "type": "line",
        "line": {
          "speaker": "elena",
          "text": "Tu as au moins dormi cette nuit ?"
        }
      },
      {
        "id": "n12",
        "type": "line",
        "line": {
          "speaker": "jeremy",
          "text": "Oui, maman."
        }
      },
      {
        "id": "n13",
        "type": "line",
        "line": {
          "speaker": "thought",
          "text": "Avant, il me racontait tout. Maintenant, j’ai l’impression qu’on vit dans deux maisons différentes."
        }
      },
      {
        "id": "v7_transition_00_01",
        "type": "line",
        "line": {
          "speaker": "jeremy",
          "text": "Quoi ? Tu vas encore me demander si tout va bien ?"
        }
      },
      {
        "id": "n14",
        "type": "choice",
        "choices": [
          {
            "label": "« Je veux juste savoir si tu vas bien. »",
            "lines": [
              {
                "speaker": "elena",
                "text": "Je veux juste savoir si tu vas bien."
              }
            ],
            "effects": [
              {
                "person": "jeremy",
                "stat": "trust",
                "amount": 1
              }
            ],
            "flags": {
              "jeremy_morning_response": "calm"
            }
          },
          {
            "label": "« Arrête de parler comme ça à Jenna. »",
            "lines": [
              {
                "speaker": "elena",
                "text": "Tu pourrais au moins être gentil avec Jenna."
              }
            ],
            "effects": [
              {
                "person": "jeremy",
                "stat": "trust",
                "amount": -1
              }
            ],
            "flags": {
              "jeremy_morning_response": "scold"
            }
          },
          {
            "label": "« On va être en retard. »",
            "lines": [
              {
                "speaker": "elena",
                "text": "Laisse tomber. On va être en retard."
              }
            ],
            "flags": {
              "jeremy_morning_response": "avoid"
            }
          }
        ]
      },
      {
        "id": "n15",
        "type": "line",
        "line": {
          "speaker": "jeremy",
          "text": "Ouais. À plus."
        }
      },
      {
        "id": "n16",
        "type": "line",
        "line": {
          "speaker": "jenna",
          "text": "Je fais vraiment de mon mieux, Elena."
        }
      },
      {
        "id": "n17",
        "type": "line",
        "line": {
          "speaker": "elena",
          "text": "Je sais. À ce soir, Jenna."
        }
      },
      {
        "id": "n18",
        "type": "line",
        "line": {
          "speaker": "narration",
          "text": "Elena quitte la maison. La première journée commence."
        }
      },
      {
        "id": "n19",
        "type": "end"
      }
    ],
    "nextScene": "ep01_scene02"
  },
  {
    "id": "ep01_scene02",
    "title": "Retrouvailles",
    "background": "schoolfront",
    "start": "n0",
    "nodes": [
      {
        "id": "n0",
        "type": "line",
        "line": {
          "speaker": "narration",
          "text": "Devant le lycée, les conversations reprennent comme si l’été n’avait duré qu’un instant."
        }
      },
      {
        "id": "n1",
        "type": "line",
        "line": {
          "speaker": "bonnie",
          "text": "Elena ! Enfin !",
          "expression": "sourire"
        }
      },
      {
        "id": "n2",
        "type": "line",
        "line": {
          "speaker": "caroline",
          "text": "On s’est demandé si tu allais arriver. J’adore ta tenue, au fait !",
          "expression": "sourire"
        }
      },
      {
        "id": "n3",
        "type": "line",
        "line": {
          "speaker": "elena",
          "text": "Vous m’avez manqué."
        }
      },
      {
        "id": "n4",
        "type": "line",
        "line": {
          "speaker": "bonnie",
          "text": "On va y aller doucement, promis."
        }
      },
      {
        "id": "n5",
        "type": "line",
        "line": {
          "speaker": "caroline",
          "text": "Doucement, oui. Mais tu dois quand même tout nous raconter !"
        }
      },
      {
        "id": "more_01_00",
        "type": "line",
        "line": {
          "speaker": "caroline",
          "text": "Au fait, la soirée de vendredi se prépare déjà."
        }
      },
      {
        "id": "more_01_01",
        "type": "line",
        "line": {
          "speaker": "bonnie",
          "text": "Caroline, on vient à peine d’arriver."
        }
      },
      {
        "id": "more_01_02",
        "type": "line",
        "line": {
          "speaker": "caroline",
          "text": "Il faut savoir anticiper."
        }
      },
      {
        "id": "more_01_03",
        "type": "line",
        "line": {
          "speaker": "elena",
          "text": "Je vais d’abord survivre à la première heure."
        }
      },
      {
        "id": "more_01_04",
        "type": "line",
        "line": {
          "speaker": "bonnie",
          "text": "Je serai là. On y va ensemble."
        }
      },
      {
        "id": "more_01_05",
        "type": "line",
        "line": {
          "speaker": "thought",
          "text": "Je les suis vers l’entrée, un peu moins seule qu’en arrivant."
        }
      },
      {
        "id": "v7_transition_01_00",
        "type": "line",
        "line": {
          "speaker": "bonnie",
          "text": "Et toi, Elena ? Tu es contente de nous retrouver ?"
        }
      },
      {
        "id": "n6",
        "type": "choice",
        "choices": [
          {
            "label": "« Vous m’avez vraiment manqué. »",
            "lines": [
              {
                "speaker": "elena",
                "text": "Vous n’imaginez pas à quel point."
              }
            ],
            "effects": [
              {
                "person": "bonnie",
                "stat": "affinity",
                "amount": 1
              },
              {
                "person": "caroline",
                "stat": "affinity",
                "amount": 1
              }
            ],
            "flags": {
              "friends_reunion_tone": "warm"
            }
          },
          {
            "label": "« Ça fait bizarre de revenir. »",
            "lines": [
              {
                "speaker": "elena",
                "text": "Ça fait bizarre de revenir, c’est tout."
              }
            ],
            "flags": {
              "friends_reunion_tone": "reserved"
            }
          },
          {
            "label": "« J’ai besoin d’un peu de temps. »",
            "lines": [
              {
                "speaker": "elena",
                "text": "Je suis contente de vous voir. Mais laissez-moi un peu de temps."
              }
            ],
            "flags": {
              "friends_reunion_tone": "space"
            }
          }
        ]
      },
      {
        "id": "n7",
        "type": "line",
        "line": {
          "speaker": "bonnie",
          "text": "On est là, d’accord ?"
        }
      },
      {
        "id": "ext_02_00",
        "type": "line",
        "line": {
          "speaker": "bonnie",
          "text": "Je t’ai gardé une place en cours. Au cas où tu voudrais disparaître derrière moi."
        }
      },
      {
        "id": "ext_02_01",
        "type": "line",
        "line": {
          "speaker": "elena",
          "text": "Tu n’as jamais su passer inaperçue."
        }
      },
      {
        "id": "ext_02_02",
        "type": "line",
        "line": {
          "speaker": "bonnie",
          "text": "C’est pour ça que notre amitié fonctionne."
        }
      },
      {
        "id": "ext_02_03",
        "type": "line",
        "line": {
          "speaker": "caroline",
          "text": "Et moi, j’ai imprimé les emplois du temps. Deux fois."
        }
      },
      {
        "id": "ext_02_04",
        "type": "line",
        "line": {
          "speaker": "elena",
          "text": "Caroline, tu es incroyable."
        }
      },
      {
        "id": "ext_02_05",
        "type": "line",
        "line": {
          "speaker": "caroline",
          "text": "Je sais. Mais tu pourrais le répéter."
        }
      },
      {
        "id": "ext_02_06",
        "type": "line",
        "line": {
          "speaker": "thought",
          "text": "Pendant quelques secondes, la rentrée ressemble à n’importe quelle autre."
        }
      },
      {
        "id": "n8",
        "type": "line",
        "line": {
          "speaker": "caroline",
          "text": "Et tu n’as pas le droit de nous éviter toute l’année."
        }
      },
      {
        "id": "n9",
        "type": "end"
      }
    ],
    "nextScene": "ep01_scene03"
  },
  {
    "id": "ep01_scene03",
    "title": "Comme avant ?",
    "background": "schoolfront",
    "start": "n0",
    "nodes": [
      {
        "id": "n0",
        "type": "line",
        "line": {
          "speaker": "thought",
          "text": "La sonnerie n’a pas encore retenti. Je peux prendre quelques minutes pour retrouver mes repères."
        }
      },
      {
        "id": "school_explore",
        "type": "explore",
        "locations": [
          {
            "id": "lockers",
            "name": "Les casiers",
            "characters": []
          },
          {
            "id": "hall",
            "name": "Le couloir",
            "characters": []
          },
          {
            "id": "cafeteria",
            "name": "La cafétéria",
            "characters": []
          },
          {
            "id": "schoolfront",
            "name": "Devant le lycée",
            "characters": [
              {
                "id": "school_bonnie",
                "name": "Bonnie",
                "next": "n1"
              }
            ]
          }
        ],
        "required": [
          "school_bonnie"
        ]
      },
      {
        "id": "n1",
        "type": "line",
        "line": {
          "speaker": "bonnie",
          "text": "Au fait, j’ai passé une partie de l’été chez ma grand-mère. Elle dit que notre famille a un don."
        },
        "next": "n2"
      },
      {
        "id": "n2",
        "type": "line",
        "line": {
          "speaker": "elena",
          "text": "Elle t’a encore prédit ton avenir dans une tasse de thé ?"
        },
        "next": "n3"
      },
      {
        "id": "n3",
        "type": "line",
        "line": {
          "speaker": "bonnie",
          "text": "Cette fois, elle était sérieuse. Je crois surtout qu’elle voulait me faire peur."
        },
        "next": "n4"
      },
      {
        "id": "v7_transition_02_00",
        "type": "line",
        "line": {
          "speaker": "bonnie",
          "text": "Tu crois que je peux te raconter ces choses-là sans que tu te moques de moi ?"
        }
      },
      {
        "id": "n4",
        "type": "choice",
        "choices": [
          {
            "label": "« Tu peux toujours m’en parler. »",
            "lines": [
              {
                "speaker": "elena",
                "text": "Je t’écoute, Bonnie. Même si ça paraît étrange."
              },
              {
                "speaker": "bonnie",
                "text": "Je savais que tu comprendrais."
              }
            ],
            "effects": [
              {
                "person": "bonnie",
                "stat": "trust",
                "amount": 1
              }
            ]
          },
          {
            "label": "« Ta grand-mère a toujours beaucoup d’imagination. »",
            "lines": [
              {
                "speaker": "elena",
                "text": "Elle aime les histoires, tu le sais."
              },
              {
                "speaker": "bonnie",
                "text": "Peut-être. Mais celle-là m’a marquée."
              }
            ]
          },
          {
            "label": "« Tu as vraiment ressenti quelque chose ? »",
            "lines": [
              {
                "speaker": "elena",
                "text": "Et toi ? Tu as ressenti quelque chose ?"
              },
              {
                "speaker": "bonnie",
                "text": "Je ne sais pas encore comment l’expliquer."
              }
            ],
            "effects": [
              {
                "person": "bonnie",
                "stat": "trust",
                "amount": 1
              }
            ]
          }
        ]
      },
      {
        "id": "n5",
        "type": "line",
        "line": {
          "speaker": "bonnie",
          "text": "Bref. Je suis contente que tu sois là."
        }
      },
      {
        "id": "n6",
        "type": "line",
        "line": {
          "speaker": "elena",
          "text": "Moi aussi. On se retrouve en classe."
        }
      },
      {
        "id": "n7",
        "type": "end"
      }
    ],
    "nextScene": "ep01_scene04"
  },
  {
    "id": "ep01_scene04",
    "title": "Un passé compliqué",
    "background": "lockers",
    "start": "n0",
    "nodes": [
      {
        "id": "n0",
        "type": "line",
        "line": {
          "speaker": "narration",
          "text": "Près des casiers, Matt attend que la foule se disperse."
        }
      },
      {
        "id": "n1",
        "type": "line",
        "line": {
          "speaker": "matt",
          "text": "Salut, Elena. Ça fait longtemps."
        }
      },
      {
        "id": "n2",
        "type": "line",
        "line": {
          "speaker": "elena",
          "text": "Salut, Matt."
        }
      },
      {
        "id": "n3",
        "type": "line",
        "line": {
          "speaker": "matt",
          "text": "Je voulais prendre de tes nouvelles. Pas juste envoyer un message de plus."
        }
      },
      {
        "id": "n4",
        "type": "line",
        "line": {
          "speaker": "thought",
          "text": "Matt me connaît depuis toujours. C’est peut-être pour ça que cette conversation est si difficile."
        }
      },
      {
        "id": "more_03_00",
        "type": "line",
        "line": {
          "speaker": "matt",
          "text": "Tu te souviens quand on cachait des mots dans nos casiers ?"
        }
      },
      {
        "id": "more_03_01",
        "type": "line",
        "line": {
          "speaker": "elena",
          "text": "Tu dessinais toujours des ballons de football dans la marge."
        }
      },
      {
        "id": "more_03_02",
        "type": "line",
        "line": {
          "speaker": "matt",
          "text": "J’étais un artiste incompris."
        }
      },
      {
        "id": "more_03_03",
        "type": "line",
        "line": {
          "speaker": "elena",
          "text": "Tu l’es toujours."
        }
      },
      {
        "id": "more_03_04",
        "type": "line",
        "line": {
          "speaker": "matt",
          "text": "Ça fait du bien de t’entendre rire."
        }
      },
      {
        "id": "more_03_05",
        "type": "line",
        "line": {
          "speaker": "thought",
          "text": "Je ne sais pas quoi répondre à ça."
        }
      },
      {
        "id": "v7_transition_03_00",
        "type": "line",
        "line": {
          "speaker": "matt",
          "text": "Et nous deux, Elena… tu voudrais qu’on soit comment, maintenant ?"
        }
      },
      {
        "id": "n5",
        "type": "choice",
        "choices": [
          {
            "label": "« Tu m’as manqué. »",
            "lines": [
              {
                "speaker": "elena",
                "text": "Tu m’as manqué, Matt."
              }
            ],
            "effects": [
              {
                "person": "matt",
                "stat": "affinity",
                "amount": 1
              },
              {
                "person": "matt",
                "stat": "attraction",
                "amount": 1
              }
            ],
            "flags": {
              "matt_first_reunion": "tender"
            }
          },
          {
            "label": "« J’espère qu’on peut rester amis. »",
            "lines": [
              {
                "speaker": "elena",
                "text": "J’aimerais qu’on arrive à rester amis."
              }
            ],
            "effects": [
              {
                "person": "matt",
                "stat": "trust",
                "amount": 1
              }
            ],
            "flags": {
              "matt_first_reunion": "friendly"
            }
          },
          {
            "label": "« Je préfère garder mes distances. »",
            "lines": [
              {
                "speaker": "elena",
                "text": "J’ai besoin qu’on garde un peu nos distances."
              }
            ],
            "effects": [
              {
                "person": "matt",
                "stat": "affinity",
                "amount": -1
              }
            ],
            "flags": {
              "matt_first_reunion": "distant"
            }
          }
        ]
      },
      {
        "id": "n6",
        "type": "line",
        "line": {
          "speaker": "matt",
          "text": "Je comprends. Je veux juste que tu ailles bien."
        }
      },
      {
        "id": "n7",
        "type": "line",
        "line": {
          "speaker": "tyler",
          "text": "Donovan ! Tu viens, ou tu comptes rester planté là ?"
        }
      },
      {
        "id": "ext_04_00",
        "type": "line",
        "line": {
          "speaker": "matt",
          "text": "Je t’ai vue devant le lycée. J’ai hésité à venir te parler."
        }
      },
      {
        "id": "ext_04_01",
        "type": "line",
        "line": {
          "speaker": "elena",
          "text": "Tu n’as pas besoin de demander la permission."
        }
      },
      {
        "id": "ext_04_02",
        "type": "line",
        "line": {
          "speaker": "matt",
          "text": "Je ne veux pas que tu aies l’impression que j’attends quelque chose."
        }
      },
      {
        "id": "ext_04_03",
        "type": "line",
        "line": {
          "speaker": "elena",
          "text": "Je sais. C’est juste que tout a changé trop vite."
        }
      },
      {
        "id": "ext_04_04",
        "type": "line",
        "line": {
          "speaker": "matt",
          "text": "Le vieux pont… parfois je passe encore par cette route."
        }
      },
      {
        "id": "ext_04_05",
        "type": "line",
        "line": {
          "speaker": "thought",
          "text": "Je détourne les yeux. Certains souvenirs ont des bords trop tranchants."
        }
      },
      {
        "id": "ext_04_06",
        "type": "line",
        "line": {
          "speaker": "matt",
          "text": "Pardon. Je ne voulais pas…"
        }
      },
      {
        "id": "ext_04_07",
        "type": "line",
        "line": {
          "speaker": "elena",
          "text": "Tu n’as rien fait de mal."
        }
      },
      {
        "id": "n8",
        "type": "line",
        "line": {
          "speaker": "matt",
          "text": "On se voit plus tard, Elena."
        }
      },
      {
        "id": "n9",
        "type": "end"
      }
    ],
    "nextScene": "ep01_scene05"
  },
  {
    "id": "ep01_scene05",
    "title": "Le nouvel élève",
    "background": "hall",
    "start": "n0",
    "nodes": [
      {
        "id": "n0",
        "type": "line",
        "line": {
          "speaker": "narration",
          "text": "Dans le couloir, Elena manque de heurter un garçon qu’elle n’a jamais vu."
        }
      },
      {
        "id": "n1",
        "type": "line",
        "line": {
          "speaker": "stefan",
          "text": "Pardon. Je ne regardais pas où j’allais."
        }
      },
      {
        "id": "n2",
        "type": "line",
        "line": {
          "speaker": "elena",
          "text": "Moi non plus. Tu es nouveau ?"
        }
      },
      {
        "id": "n3",
        "type": "line",
        "line": {
          "speaker": "stefan",
          "text": "Stefan Salvatore. Je viens d’arriver à Mystic Falls."
        }
      },
      {
        "id": "n4",
        "type": "line",
        "line": {
          "speaker": "thought",
          "text": "Il a une façon étrange de me regarder. Comme s’il me reconnaissait."
        }
      },
      {
        "id": "more_04_00",
        "type": "line",
        "line": {
          "speaker": "stefan",
          "text": "Je n’ai pas encore trouvé un endroit où déjeuner."
        }
      },
      {
        "id": "more_04_01",
        "type": "line",
        "line": {
          "speaker": "elena",
          "text": "La cafétéria est au bout du couloir. Évite les pâtes du mardi."
        }
      },
      {
        "id": "more_04_02",
        "type": "line",
        "line": {
          "speaker": "stefan",
          "text": "C’est noté."
        }
      },
      {
        "id": "more_04_03",
        "type": "line",
        "line": {
          "speaker": "elena",
          "text": "Tu verras, tout le monde finit par trouver ses habitudes ici."
        }
      },
      {
        "id": "more_04_04",
        "type": "line",
        "line": {
          "speaker": "stefan",
          "text": "C’est peut-être ce que je cherche."
        }
      },
      {
        "id": "more_04_05",
        "type": "line",
        "line": {
          "speaker": "thought",
          "text": "Il a dit ça comme si le mot habitudes était quelque chose de précieux."
        }
      },
      {
        "id": "v7_transition_04_00",
        "type": "line",
        "line": {
          "speaker": "stefan",
          "text": "J’espère que mon arrivée ici ne te paraît pas trop étrange."
        }
      },
      {
        "id": "n5",
        "type": "choice",
        "choices": [
          {
            "label": "« Bienvenue à Mystic Falls. »",
            "lines": [
              {
                "speaker": "elena",
                "text": "Alors, bienvenue à Mystic Falls."
              }
            ],
            "effects": [
              {
                "person": "stefan",
                "stat": "attraction",
                "amount": 1
              }
            ],
            "flags": {
              "stefan_first_impression": "charming"
            }
          },
          {
            "label": "« Pourquoi cette ville ? »",
            "lines": [
              {
                "speaker": "elena",
                "text": "Qu’est-ce qui t’amène ici ?"
              }
            ],
            "effects": [
              {
                "person": "stefan",
                "stat": "trust",
                "amount": 1
              }
            ],
            "flags": {
              "stefan_first_impression": "curious"
            }
          },
          {
            "label": "« Je dois filer. »",
            "lines": [
              {
                "speaker": "elena",
                "text": "Enchantée. Je dois aller en cours."
              }
            ],
            "flags": {
              "stefan_first_impression": "distant"
            }
          }
        ]
      },
      {
        "id": "n6",
        "type": "line",
        "line": {
          "speaker": "stefan",
          "text": "Enchanté, Elena."
        }
      },
      {
        "id": "ext_05_00",
        "type": "line",
        "line": {
          "speaker": "stefan",
          "text": "Je cherche la salle d’histoire. Je crois que je me suis trompé de couloir."
        }
      },
      {
        "id": "ext_05_01",
        "type": "line",
        "line": {
          "speaker": "elena",
          "text": "Tu n’es pas le premier à te perdre ici."
        }
      },
      {
        "id": "ext_05_02",
        "type": "line",
        "line": {
          "speaker": "stefan",
          "text": "Tu as l’air de connaître tout le monde."
        }
      },
      {
        "id": "ext_05_03",
        "type": "line",
        "line": {
          "speaker": "elena",
          "text": "C’est une petite ville. Les gens se souviennent de tout."
        }
      },
      {
        "id": "ext_05_04",
        "type": "line",
        "line": {
          "speaker": "stefan",
          "text": "Même des choses qu’on préférerait oublier ?"
        }
      },
      {
        "id": "ext_05_05",
        "type": "line",
        "line": {
          "speaker": "thought",
          "text": "Sa question est étrange, mais son regard ne l’est pas."
        }
      },
      {
        "id": "ext_05_06",
        "type": "line",
        "line": {
          "speaker": "elena",
          "text": "Surtout de celles-là, parfois."
        }
      },
      {
        "id": "n7",
        "type": "line",
        "line": {
          "speaker": "thought",
          "text": "Attends… est-ce que je lui ai dit mon prénom ?"
        }
      },
      {
        "id": "n8",
        "type": "end"
      }
    ],
    "nextScene": "ep01_scene06"
  },
  {
    "id": "ep01_scene06",
    "title": "Une rencontre intrigante",
    "background": "classroom",
    "start": "n0",
    "nodes": [
      {
        "id": "n0",
        "type": "line",
        "line": {
          "speaker": "narration",
          "text": "Quelques minutes plus tard, le cours d’histoire commence."
        }
      },
      {
        "id": "n1",
        "type": "line",
        "line": {
          "speaker": "system",
          "text": "Le professeur interroge la classe sur la fondation de Mystic Falls."
        }
      },
      {
        "id": "n2",
        "type": "line",
        "line": {
          "speaker": "stefan",
          "text": "Les récits officiels ne racontent pas tout. Il y a eu des événements dont on parle beaucoup moins."
        }
      },
      {
        "id": "n3",
        "type": "line",
        "line": {
          "speaker": "elena",
          "text": "Tu as l’air de connaître cette ville par cœur."
        }
      },
      {
        "id": "n4",
        "type": "line",
        "line": {
          "speaker": "stefan",
          "text": "J’ai beaucoup lu sur son histoire."
        }
      },
      {
        "id": "more_05_00",
        "type": "line",
        "line": {
          "speaker": "elena",
          "text": "Tu avais l’air de connaître la réponse avant même la question."
        }
      },
      {
        "id": "more_05_01",
        "type": "line",
        "line": {
          "speaker": "stefan",
          "text": "J’ai peut-être trop préparé mon premier jour."
        }
      },
      {
        "id": "more_05_02",
        "type": "line",
        "line": {
          "speaker": "elena",
          "text": "Personne ne prépare autant son premier jour."
        }
      },
      {
        "id": "more_05_03",
        "type": "line",
        "line": {
          "speaker": "stefan",
          "text": "Alors je suis une exception."
        }
      },
      {
        "id": "more_05_04",
        "type": "line",
        "line": {
          "speaker": "elena",
          "text": "Tu en as d’autres ?"
        }
      },
      {
        "id": "more_05_05",
        "type": "line",
        "line": {
          "speaker": "stefan",
          "text": "Probablement."
        }
      },
      {
        "id": "more_05_06",
        "type": "line",
        "line": {
          "speaker": "thought",
          "text": "Je n’arrive pas à savoir s’il plaisante."
        }
      },
      {
        "id": "v7_transition_05_00",
        "type": "line",
        "line": {
          "speaker": "stefan",
          "text": "J’ai toujours aimé l’histoire. Tu trouves ça bizarre ?"
        }
      },
      {
        "id": "n5",
        "type": "choice",
        "choices": [
          {
            "label": "« C’est impressionnant. »",
            "lines": [
              {
                "speaker": "elena",
                "text": "Tu as réponse à tout, on dirait."
              }
            ],
            "effects": [
              {
                "person": "stefan",
                "stat": "attraction",
                "amount": 1
              }
            ],
            "flags": {
              "stefan_history_reaction": "impressed"
            }
          },
          {
            "label": "« Tu as appris ça où ? »",
            "lines": [
              {
                "speaker": "elena",
                "text": "Tu as trouvé tout ça dans des livres ?"
              }
            ],
            "effects": [
              {
                "person": "stefan",
                "stat": "curiosity",
                "amount": 1
              }
            ],
            "flags": {
              "stefan_history_reaction": "curious"
            }
          },
          {
            "label": "« C’est un peu étrange. »",
            "lines": [
              {
                "speaker": "elena",
                "text": "C’est une connaissance très précise pour un nouvel élève."
              }
            ],
            "effects": [
              {
                "person": "stefan",
                "stat": "suspicion",
                "amount": 1
              }
            ],
            "flags": {
              "stefan_history_reaction": "suspicious"
            }
          }
        ]
      },
      {
        "id": "ext_06_00",
        "type": "line",
        "line": {
          "speaker": "stefan",
          "text": "Ce qui m’intéresse, c’est la façon dont les gens racontent l’histoire."
        }
      },
      {
        "id": "ext_06_01",
        "type": "line",
        "line": {
          "speaker": "elena",
          "text": "Tu parles comme si tu y avais assisté."
        }
      },
      {
        "id": "ext_06_02",
        "type": "line",
        "line": {
          "speaker": "stefan",
          "text": "J’ai beaucoup lu."
        }
      },
      {
        "id": "ext_06_03",
        "type": "line",
        "line": {
          "speaker": "elena",
          "text": "C’est une réponse pratique."
        }
      },
      {
        "id": "ext_06_04",
        "type": "line",
        "line": {
          "speaker": "stefan",
          "text": "Je m’en rends compte."
        }
      },
      {
        "id": "ext_06_05",
        "type": "line",
        "line": {
          "speaker": "thought",
          "text": "Il esquisse un sourire, puis regarde aussitôt vers la fenêtre."
        }
      },
      {
        "id": "n6",
        "type": "line",
        "line": {
          "speaker": "stefan",
          "text": "L’histoire est pleine de surprises."
        }
      },
      {
        "id": "n7",
        "type": "end"
      }
    ],
    "nextScene": "ep01_scene07"
  },
  {
    "id": "ep01_scene07",
    "title": "Entre amis",
    "background": "cafeteria",
    "start": "n0",
    "nodes": [
      {
        "id": "n0",
        "type": "line",
        "line": {
          "speaker": "caroline",
          "text": "Bon, parlons du sujet le plus important de cette rentrée : Stefan Salvatore."
        }
      },
      {
        "id": "n1",
        "type": "line",
        "line": {
          "speaker": "bonnie",
          "text": "Caroline, tu le connais depuis environ dix minutes."
        }
      },
      {
        "id": "n2",
        "type": "line",
        "line": {
          "speaker": "caroline",
          "text": "Et alors ? Ça ne m’empêche pas d’avoir des yeux."
        }
      },
      {
        "id": "n3",
        "type": "line",
        "line": {
          "speaker": "tyler",
          "text": "Il a surtout l’air de se croire mystérieux."
        }
      },
      {
        "id": "n4",
        "type": "line",
        "line": {
          "speaker": "matt",
          "text": "On pourrait peut-être parler d’autre chose."
        }
      },
      {
        "id": "more_06_00",
        "type": "line",
        "line": {
          "speaker": "matt",
          "text": "Vous voulez venir au Grill après les cours ?"
        }
      },
      {
        "id": "more_06_01",
        "type": "line",
        "line": {
          "speaker": "caroline",
          "text": "Évidemment. C’est là que tout le monde finit."
        }
      },
      {
        "id": "more_06_02",
        "type": "line",
        "line": {
          "speaker": "bonnie",
          "text": "Même quand on dit qu’on va rentrer travailler."
        }
      },
      {
        "id": "more_06_03",
        "type": "line",
        "line": {
          "speaker": "elena",
          "text": "Ça me paraît être un bon programme."
        }
      },
      {
        "id": "more_06_04",
        "type": "line",
        "line": {
          "speaker": "tyler",
          "text": "C’est officiel : Elena a validé le Grill."
        }
      },
      {
        "id": "more_06_05",
        "type": "line",
        "line": {
          "speaker": "elena",
          "text": "Je suis ravie de cette responsabilité."
        }
      },
      {
        "id": "v7_transition_06_00",
        "type": "line",
        "line": {
          "speaker": "caroline",
          "text": "Bon, Elena, tu penses quoi de Stefan, toi ?"
        }
      },
      {
        "id": "n5",
        "type": "choice",
        "choices": [
          {
            "label": "« Il est plutôt intéressant. »",
            "lines": [
              {
                "speaker": "elena",
                "text": "Je dois avouer qu’il m’intrigue."
              }
            ],
            "effects": [
              {
                "person": "stefan",
                "stat": "attraction",
                "amount": 1
              }
            ],
            "flags": {
              "friends_know_stefan_interest": "yes"
            }
          },
          {
            "label": "« Je le connais à peine. »",
            "lines": [
              {
                "speaker": "elena",
                "text": "Je lui ai parlé deux minutes, Caroline."
              }
            ],
            "flags": {
              "friends_know_stefan_interest": "neutral"
            }
          },
          {
            "label": "« Changeons de sujet. »",
            "lines": [
              {
                "speaker": "elena",
                "text": "On peut parler d’autre chose ?"
              }
            ],
            "flags": {
              "friends_know_stefan_interest": "no"
            }
          }
        ]
      },
      {
        "id": "ext_07_00",
        "type": "line",
        "line": {
          "speaker": "caroline",
          "text": "Je propose qu’on parle de quelque chose de normal. Les devoirs, par exemple."
        }
      },
      {
        "id": "ext_07_01",
        "type": "line",
        "line": {
          "speaker": "tyler",
          "text": "C’est ta définition de normal ?"
        }
      },
      {
        "id": "ext_07_02",
        "type": "line",
        "line": {
          "speaker": "bonnie",
          "text": "Tu as mieux ?"
        }
      },
      {
        "id": "ext_07_03",
        "type": "line",
        "line": {
          "speaker": "tyler",
          "text": "Le match de vendredi."
        }
      },
      {
        "id": "ext_07_04",
        "type": "line",
        "line": {
          "speaker": "matt",
          "text": "On n’a même pas encore commencé les entraînements."
        }
      },
      {
        "id": "ext_07_05",
        "type": "line",
        "line": {
          "speaker": "caroline",
          "text": "Voilà. Une conversation parfaitement ennuyeuse. Ça me rassure."
        }
      },
      {
        "id": "ext_07_06",
        "type": "line",
        "line": {
          "speaker": "elena",
          "text": "Je crois que ça me rassure aussi."
        }
      },
      {
        "id": "n6",
        "type": "line",
        "line": {
          "speaker": "bonnie",
          "text": "Ça, c’est la Caroline qu’on connaît."
        }
      },
      {
        "id": "n7",
        "type": "end"
      }
    ],
    "nextScene": "ep01_scene08"
  },
  {
    "id": "ep01_scene08",
    "title": "Une étrange intuition",
    "background": "schoolfront",
    "start": "n0",
    "nodes": [
      {
        "id": "n0",
        "type": "line",
        "line": {
          "speaker": "bonnie",
          "text": "Elena, attends. Je voulais te dire quelque chose."
        }
      },
      {
        "id": "n1",
        "type": "line",
        "line": {
          "speaker": "elena",
          "text": "Tu as l’air sérieuse."
        }
      },
      {
        "id": "n2",
        "type": "line",
        "line": {
          "speaker": "bonnie",
          "text": "Quand j’ai croisé Stefan… j’ai ressenti un truc bizarre. Comme un mauvais pressentiment."
        }
      },
      {
        "id": "more_07_00",
        "type": "line",
        "line": {
          "speaker": "elena",
          "text": "Tu as vu quelque chose de précis ?"
        }
      },
      {
        "id": "more_07_01",
        "type": "line",
        "line": {
          "speaker": "bonnie",
          "text": "Non. C’était plutôt… une impression."
        }
      },
      {
        "id": "more_07_02",
        "type": "line",
        "line": {
          "speaker": "elena",
          "text": "Tu ne me fais pas souvent ce genre de confidence."
        }
      },
      {
        "id": "more_07_03",
        "type": "line",
        "line": {
          "speaker": "bonnie",
          "text": "Parce que j’ai peur que tu me prennes pour une folle."
        }
      },
      {
        "id": "more_07_04",
        "type": "line",
        "line": {
          "speaker": "elena",
          "text": "Je te connais depuis trop longtemps pour ça."
        }
      },
      {
        "id": "more_07_05",
        "type": "line",
        "line": {
          "speaker": "bonnie",
          "text": "Alors on garde ça entre nous, d’accord ?"
        }
      },
      {
        "id": "v7_transition_07_00",
        "type": "line",
        "line": {
          "speaker": "bonnie",
          "text": "Tu me crois quand je te dis que quelque chose me trouble chez Stefan ?"
        }
      },
      {
        "id": "n3",
        "type": "choice",
        "choices": [
          {
            "label": "« Je te crois. »",
            "lines": [
              {
                "speaker": "elena",
                "text": "Si ça t’a inquiétée, je préfère t’écouter."
              }
            ],
            "effects": [
              {
                "person": "bonnie",
                "stat": "trust",
                "amount": 1
              },
              {
                "person": "stefan",
                "stat": "suspicion",
                "amount": 1
              }
            ],
            "flags": {
              "bonnie_warning_response": "serious"
            }
          },
          {
            "label": "« Peut-être que tu es fatiguée. »",
            "lines": [
              {
                "speaker": "elena",
                "text": "Je ne sais pas ce que ça veut dire, mais je t’écoute."
              }
            ],
            "effects": [
              {
                "person": "bonnie",
                "stat": "trust",
                "amount": 1
              }
            ],
            "flags": {
              "bonnie_warning_response": "gentle"
            }
          },
          {
            "label": "« Tu ne le connais pas. »",
            "lines": [
              {
                "speaker": "elena",
                "text": "Bonnie, tu ne peux pas le juger sur une impression."
              }
            ],
            "flags": {
              "bonnie_warning_response": "defend"
            }
          }
        ]
      },
      {
        "id": "ext_08_00",
        "type": "line",
        "line": {
          "speaker": "bonnie",
          "text": "Tu connais cette sensation, quand une pièce devient froide sans raison ?"
        }
      },
      {
        "id": "ext_08_01",
        "type": "line",
        "line": {
          "speaker": "elena",
          "text": "Bonnie…"
        }
      },
      {
        "id": "ext_08_02",
        "type": "line",
        "line": {
          "speaker": "bonnie",
          "text": "Je sais. Ça paraît idiot."
        }
      },
      {
        "id": "ext_08_03",
        "type": "line",
        "line": {
          "speaker": "elena",
          "text": "Non. Je veux comprendre."
        }
      },
      {
        "id": "ext_08_04",
        "type": "line",
        "line": {
          "speaker": "bonnie",
          "text": "Alors promets-moi seulement de faire attention."
        }
      },
      {
        "id": "ext_08_05",
        "type": "line",
        "line": {
          "speaker": "thought",
          "text": "Je pourrais plaisanter. Mais elle ne plaisante pas."
        }
      },
      {
        "id": "n4",
        "type": "line",
        "line": {
          "speaker": "bonnie",
          "text": "Peut-être que je me fais des idées. Sois juste prudente."
        }
      },
      {
        "id": "n5",
        "type": "end"
      }
    ],
    "nextScene": "ep01_scene09"
  },
  {
    "id": "ep01_scene09",
    "title": "Une famille fragile",
    "background": "living",
    "start": "n0",
    "nodes": [
      {
        "id": "n0",
        "type": "line",
        "line": {
          "speaker": "narration",
          "text": "Après les cours, Elena retrouve une maison inhabituellement silencieuse."
        }
      },
      {
        "id": "n1",
        "type": "line",
        "line": {
          "speaker": "jenna",
          "text": "Jeremy est rentré il y a une heure. Il s’est enfermé dans sa chambre."
        }
      },
      {
        "id": "n2",
        "type": "line",
        "line": {
          "speaker": "elena",
          "text": "Il était déjà de mauvaise humeur ce matin."
        }
      },
      {
        "id": "n3",
        "type": "line",
        "line": {
          "speaker": "jenna",
          "text": "Je m’inquiète. Et j’ai l’impression que chaque fois que je lui parle, je fais pire."
        }
      },
      {
        "id": "n4",
        "type": "line",
        "line": {
          "speaker": "jeremy",
          "text": "Vous savez que je vous entends ?"
        }
      },
      {
        "id": "n5",
        "type": "line",
        "line": {
          "speaker": "elena",
          "text": "Jeremy, tu fréquentes encore Vicki ?"
        }
      },
      {
        "id": "n6",
        "type": "line",
        "line": {
          "speaker": "jeremy",
          "text": "Elle au moins ne passe pas son temps à me surveiller."
        }
      },
      {
        "id": "more_08_00",
        "type": "line",
        "line": {
          "speaker": "jeremy",
          "text": "Vous parlez encore de moi ?"
        }
      },
      {
        "id": "more_08_01",
        "type": "line",
        "line": {
          "speaker": "jenna",
          "text": "On essaie de savoir comment t’aider."
        }
      },
      {
        "id": "more_08_02",
        "type": "line",
        "line": {
          "speaker": "jeremy",
          "text": "Je n’ai rien demandé."
        }
      },
      {
        "id": "more_08_03",
        "type": "line",
        "line": {
          "speaker": "elena",
          "text": "Personne ne t’accuse de quoi que ce soit."
        }
      },
      {
        "id": "more_08_04",
        "type": "line",
        "line": {
          "speaker": "jeremy",
          "text": "Ça ne change pas la façon dont vous me regardez."
        }
      },
      {
        "id": "more_08_05",
        "type": "line",
        "line": {
          "speaker": "thought",
          "text": "Il monte l’escalier avant que je puisse trouver une réponse."
        }
      },
      {
        "id": "n7",
        "type": "choice",
        "choices": [
          {
            "label": "« Je suis là si tu as besoin. »",
            "lines": [
              {
                "speaker": "elena",
                "text": "Je ne veux pas te surveiller. Je veux juste t’aider."
              }
            ],
            "effects": [
              {
                "person": "jeremy",
                "stat": "trust",
                "amount": 1
              }
            ],
            "flags": {
              "jeremy_afternoon_response": "help"
            }
          },
          {
            "label": "« Tu dois faire attention. »",
            "lines": [
              {
                "speaker": "elena",
                "text": "Tu ne peux pas continuer comme ça."
              }
            ],
            "effects": [
              {
                "person": "jeremy",
                "stat": "trust",
                "amount": -1
              }
            ],
            "flags": {
              "jeremy_afternoon_response": "scold"
            }
          },
          {
            "label": "« On parlera plus tard. »",
            "lines": [
              {
                "speaker": "elena",
                "text": "D’accord. On en reparlera quand tu voudras."
              }
            ],
            "flags": {
              "jeremy_afternoon_response": "space"
            }
          }
        ]
      },
      {
        "id": "n8",
        "type": "line",
        "line": {
          "speaker": "jeremy",
          "text": "Ouais. Plus tard."
        }
      },
      {
        "id": "ext_09_00",
        "type": "line",
        "line": {
          "speaker": "jenna",
          "text": "Le conseiller du lycée m’a appelée au sujet de Jeremy."
        }
      },
      {
        "id": "ext_09_01",
        "type": "line",
        "line": {
          "speaker": "elena",
          "text": "Il a encore séché un cours ?"
        }
      },
      {
        "id": "ext_09_02",
        "type": "line",
        "line": {
          "speaker": "jenna",
          "text": "Deux. Et je ne sais plus quoi dire sans qu’il claque la porte."
        }
      },
      {
        "id": "ext_09_03",
        "type": "line",
        "line": {
          "speaker": "elena",
          "text": "Il est en colère contre le monde entier."
        }
      },
      {
        "id": "ext_09_04",
        "type": "line",
        "line": {
          "speaker": "jenna",
          "text": "Et toi ? Tu n’as pas le droit d’être en colère ?"
        }
      },
      {
        "id": "ext_09_05",
        "type": "line",
        "line": {
          "speaker": "elena",
          "text": "Je ne sais même pas par où commencer."
        }
      },
      {
        "id": "ext_09_06",
        "type": "line",
        "line": {
          "speaker": "jenna",
          "text": "Alors on peut commencer par dîner ensemble."
        }
      },
      {
        "id": "ext_09_07",
        "type": "line",
        "line": {
          "speaker": "thought",
          "text": "Jenna essaie de nous retenir tous les deux. Je ne lui facilite pas la tâche."
        }
      },
      {
        "id": "n9",
        "type": "line",
        "line": {
          "speaker": "thought",
          "text": "Je ne peux pas le forcer à me parler. Mais je ne peux pas non plus faire semblant de ne rien voir."
        }
      },
      {
        "id": "n10",
        "type": "end"
      }
    ],
    "nextScene": "ep01_scene10"
  },
  {
    "id": "ep01_scene10",
    "title": "Le journal d’Elena",
    "background": "cemetery",
    "start": "n0",
    "nodes": [
      {
        "id": "n0",
        "type": "line",
        "line": {
          "speaker": "journal",
          "text": "Je suis retournée au cimetière aujourd’hui. J’aimerais pouvoir raconter à mes parents cette première journée. Les choses ont changé, et pourtant certains endroits n’ont pas bougé."
        }
      },
      {
        "id": "more_09_00",
        "type": "line",
        "line": {
          "speaker": "thought",
          "text": "Je me souviens du bruit des pneus sur la route, de la pluie, puis du silence."
        }
      },
      {
        "id": "more_09_01",
        "type": "line",
        "line": {
          "speaker": "journal",
          "text": "Je continue de penser aux phrases que je n’ai pas dites."
        }
      },
      {
        "id": "more_09_02",
        "type": "line",
        "line": {
          "speaker": "elena",
          "text": "Je vais essayer de vivre. Même quand ça semble impossible."
        }
      },
      {
        "id": "more_09_03",
        "type": "line",
        "line": {
          "speaker": "thought",
          "text": "Une feuille tombe sur la pierre. Le monde continue sans attendre."
        }
      },
      {
        "id": "more_09_04",
        "type": "line",
        "line": {
          "speaker": "journal",
          "text": "Peut-être que revenir demain sera un peu moins difficile."
        }
      },
      {
        "id": "v7_transition_09_00",
        "type": "line",
        "line": {
          "speaker": "thought",
          "text": "Qu’est-ce que j’aimerais me promettre, ici, devant leur tombe ?"
        }
      },
      {
        "id": "n1",
        "type": "choice",
        "choices": [
          {
            "label": "« Je veux avancer. »",
            "lines": [
              {
                "speaker": "elena",
                "text": "Je veux retrouver quelque chose qui ressemble à une vie normale."
              }
            ],
            "flags": {
              "elena_journal_mood": "hopeful"
            }
          },
          {
            "label": "« Ils me manquent. »",
            "lines": [
              {
                "speaker": "elena",
                "text": "Il y a des jours où leur absence prend toute la place."
              }
            ],
            "flags": {
              "elena_journal_mood": "grieving"
            }
          },
          {
            "label": "« Je dois protéger Jeremy. »",
            "lines": [
              {
                "speaker": "elena",
                "text": "Je ne peux pas laisser Jeremy se perdre lui aussi."
              }
            ],
            "flags": {
              "elena_journal_mood": "protective"
            }
          }
        ]
      },
      {
        "id": "ext_10_00",
        "type": "line",
        "line": {
          "speaker": "journal",
          "text": "Il y a des endroits où le silence a une forme. Ici, il ressemble à deux noms gravés dans la pierre."
        }
      },
      {
        "id": "ext_10_01",
        "type": "line",
        "line": {
          "speaker": "thought",
          "text": "Je passe le doigt sur les lettres. Je connais leur ordre par cœur."
        }
      },
      {
        "id": "ext_10_02",
        "type": "line",
        "line": {
          "speaker": "elena",
          "text": "Salut, maman. Salut, papa."
        }
      },
      {
        "id": "ext_10_03",
        "type": "line",
        "line": {
          "speaker": "thought",
          "text": "J’ai tant de choses à vous raconter, et aucune qui ressemble à une bonne nouvelle."
        }
      },
      {
        "id": "ext_10_04",
        "type": "line",
        "line": {
          "speaker": "journal",
          "text": "Je pensais que revenir ici m’aiderait à trouver les mots. Peut-être que les mots viendront plus tard."
        }
      },
      {
        "id": "n2",
        "type": "line",
        "line": {
          "speaker": "narration",
          "text": "Un bruit de pas attire son attention. Stefan se tient un peu plus loin, entre les tombes."
        }
      },
      {
        "id": "n3",
        "type": "end"
      }
    ],
    "nextScene": "ep01_scene11"
  },
  {
    "id": "ep01_scene11",
    "title": "Une conversation inattendue",
    "background": "cemetery2",
    "start": "n0",
    "nodes": [
      {
        "id": "n0",
        "type": "line",
        "line": {
          "speaker": "stefan",
          "text": "Elena ? Je ne voulais pas te déranger."
        }
      },
      {
        "id": "n1",
        "type": "line",
        "line": {
          "speaker": "elena",
          "text": "Tu viens souvent ici ?"
        }
      },
      {
        "id": "n2",
        "type": "line",
        "line": {
          "speaker": "stefan",
          "text": "De temps en temps. C’est un endroit calme."
        }
      },
      {
        "id": "n3",
        "type": "line",
        "line": {
          "speaker": "stefan",
          "text": "Tu étais venue voir quelqu’un ?"
        }
      },
      {
        "id": "more_10_00",
        "type": "line",
        "line": {
          "speaker": "elena",
          "text": "Tu viens souvent au cimetière ?"
        }
      },
      {
        "id": "more_10_01",
        "type": "line",
        "line": {
          "speaker": "stefan",
          "text": "Plus que je ne le voudrais."
        }
      },
      {
        "id": "more_10_02",
        "type": "line",
        "line": {
          "speaker": "elena",
          "text": "Alors tu sais ce que ça fait."
        }
      },
      {
        "id": "more_10_03",
        "type": "line",
        "line": {
          "speaker": "stefan",
          "text": "Je sais qu’on apprend à vivre avec l’absence. Pas à l’effacer."
        }
      },
      {
        "id": "more_10_04",
        "type": "line",
        "line": {
          "speaker": "elena",
          "text": "C’est la première réponse honnête que j’entends aujourd’hui."
        }
      },
      {
        "id": "more_10_05",
        "type": "line",
        "line": {
          "speaker": "stefan",
          "text": "Je suis heureux qu’elle t’aide."
        }
      },
      {
        "id": "v7_transition_10_00",
        "type": "line",
        "line": {
          "speaker": "stefan",
          "text": "Tu veux me dire ce qui t’a amenée ici ?"
        }
      },
      {
        "id": "n4",
        "type": "choice",
        "choices": [
          {
            "label": "« Mes parents. »",
            "lines": [
              {
                "speaker": "elena",
                "text": "Mes parents sont enterrés ici. Ils sont morts il y a quatre mois."
              }
            ],
            "effects": [
              {
                "person": "stefan",
                "stat": "trust",
                "amount": 2
              }
            ],
            "flags": {
              "stefan_cemetery_openness": "open"
            }
          },
          {
            "label": "« J’avais besoin de réfléchir. »",
            "lines": [
              {
                "speaker": "elena",
                "text": "J’avais besoin d’un endroit tranquille."
              }
            ],
            "effects": [
              {
                "person": "stefan",
                "stat": "affinity",
                "amount": 1
              }
            ],
            "flags": {
              "stefan_cemetery_openness": "light"
            }
          },
          {
            "label": "« C’est personnel. »",
            "lines": [
              {
                "speaker": "elena",
                "text": "Je préfère ne pas en parler."
              }
            ],
            "flags": {
              "stefan_cemetery_openness": "closed"
            }
          }
        ]
      },
      {
        "id": "n5",
        "type": "line",
        "line": {
          "speaker": "stefan",
          "text": "Je comprends. Je ne voulais pas être indiscret."
        }
      },
      {
        "id": "n6",
        "type": "line",
        "line": {
          "speaker": "elena",
          "text": "Et toi ? Pourquoi Mystic Falls ?"
        }
      },
      {
        "id": "ext_11_00",
        "type": "line",
        "line": {
          "speaker": "stefan",
          "text": "Je ne voulais pas te déranger."
        }
      },
      {
        "id": "ext_11_01",
        "type": "line",
        "line": {
          "speaker": "elena",
          "text": "Tu ne me déranges pas."
        }
      },
      {
        "id": "ext_11_02",
        "type": "line",
        "line": {
          "speaker": "stefan",
          "text": "Tu viens souvent ici ?"
        }
      },
      {
        "id": "ext_11_03",
        "type": "line",
        "line": {
          "speaker": "elena",
          "text": "Assez pour savoir quelle allée évite les visiteurs."
        }
      },
      {
        "id": "ext_11_04",
        "type": "line",
        "line": {
          "speaker": "stefan",
          "text": "Je suis désolé. Je ne savais pas."
        }
      },
      {
        "id": "ext_11_05",
        "type": "line",
        "line": {
          "speaker": "elena",
          "text": "Les gens disent souvent ça."
        }
      },
      {
        "id": "ext_11_06",
        "type": "line",
        "line": {
          "speaker": "stefan",
          "text": "Je peux simplement rester, si tu préfères."
        }
      },
      {
        "id": "ext_11_07",
        "type": "line",
        "line": {
          "speaker": "thought",
          "text": "C’est peut-être la première fois aujourd’hui que quelqu’un ne me demande pas d’aller bien."
        }
      },
      {
        "id": "n7",
        "type": "line",
        "line": {
          "speaker": "stefan",
          "text": "Disons que ma famille a des racines ici."
        }
      },
      {
        "id": "n8",
        "type": "end"
      }
    ],
    "nextScene": "ep01_scene12"
  },
  {
    "id": "ep01_scene12",
    "title": "Les secrets de Stefan",
    "background": "cemeteryexit",
    "start": "n0",
    "nodes": [
      {
        "id": "n0",
        "type": "line",
        "line": {
          "speaker": "stefan",
          "text": "Cette ville a changé, mais certains endroits sont restés presque identiques."
        }
      },
      {
        "id": "n1",
        "type": "line",
        "line": {
          "speaker": "elena",
          "text": "Tu dis ça comme si tu l’avais connue il y a très longtemps."
        }
      },
      {
        "id": "n2",
        "type": "line",
        "line": {
          "speaker": "stefan",
          "text": "J’ai vu beaucoup de photographies anciennes."
        }
      },
      {
        "id": "more_11_00",
        "type": "line",
        "line": {
          "speaker": "stefan",
          "text": "Je devrais y aller. Je ne veux pas te mettre en retard."
        }
      },
      {
        "id": "more_11_01",
        "type": "line",
        "line": {
          "speaker": "elena",
          "text": "On se recroisera au lycée."
        }
      },
      {
        "id": "more_11_02",
        "type": "line",
        "line": {
          "speaker": "stefan",
          "text": "Je l’espère."
        }
      },
      {
        "id": "more_11_03",
        "type": "line",
        "line": {
          "speaker": "thought",
          "text": "Il s’éloigne si vite que je me demande si j’ai rêvé notre conversation."
        }
      },
      {
        "id": "more_11_04",
        "type": "line",
        "line": {
          "speaker": "elena",
          "text": "Stefan ?"
        }
      },
      {
        "id": "more_11_05",
        "type": "line",
        "line": {
          "speaker": "thought",
          "text": "Il s’arrête un instant, puis me sourit avant de disparaître derrière les arbres."
        }
      },
      {
        "id": "n3",
        "type": "choice",
        "choices": [
          {
            "label": "« Tu évites toujours les questions ? »",
            "lines": [
              {
                "speaker": "elena",
                "text": "Tu es toujours aussi mystérieux ?"
              }
            ],
            "effects": [
              {
                "person": "stefan",
                "stat": "curiosity",
                "amount": 1
              }
            ],
            "flags": {
              "stefan_cemetery_suspicion": "question"
            }
          },
          {
            "label": "« Ça paraît étrange. »",
            "lines": [
              {
                "speaker": "elena",
                "text": "Il y a quelque chose que tu ne me dis pas."
              }
            ],
            "effects": [
              {
                "person": "stefan",
                "stat": "suspicion",
                "amount": 1
              }
            ],
            "flags": {
              "stefan_cemetery_suspicion": "observe"
            }
          },
          {
            "label": "« Je vois. »",
            "lines": [
              {
                "speaker": "elena",
                "text": "Tu dois aimer l’histoire de ta famille."
              }
            ],
            "flags": {
              "stefan_cemetery_suspicion": "ignore"
            }
          }
        ]
      },
      {
        "id": "n4",
        "type": "line",
        "line": {
          "speaker": "stefan",
          "text": "Je ne voulais pas donner cette impression."
        }
      },
      {
        "id": "ext_12_00",
        "type": "line",
        "line": {
          "speaker": "elena",
          "text": "Tu connais vraiment bien Mystic Falls pour quelqu’un qui vient d’arriver."
        }
      },
      {
        "id": "ext_12_01",
        "type": "line",
        "line": {
          "speaker": "stefan",
          "text": "J’ai de la famille dans la région."
        }
      },
      {
        "id": "ext_12_02",
        "type": "line",
        "line": {
          "speaker": "elena",
          "text": "Tu réponds toujours sans vraiment répondre ?"
        }
      },
      {
        "id": "ext_12_03",
        "type": "line",
        "line": {
          "speaker": "stefan",
          "text": "Seulement quand la question est difficile."
        }
      },
      {
        "id": "ext_12_04",
        "type": "line",
        "line": {
          "speaker": "elena",
          "text": "Alors je devrais en poser de plus simples."
        }
      },
      {
        "id": "ext_12_05",
        "type": "line",
        "line": {
          "speaker": "stefan",
          "text": "Ou me laisser le temps de trouver de meilleures réponses."
        }
      },
      {
        "id": "ext_12_06",
        "type": "line",
        "line": {
          "speaker": "thought",
          "text": "Je devrais trouver ça agaçant. Pourtant, je souris."
        }
      },
      {
        "id": "n5",
        "type": "line",
        "line": {
          "speaker": "narration",
          "text": "Ils se séparent à la sortie du cimetière. Elena retrouve ensuite ses amis au Grill."
        }
      },
      {
        "id": "n6",
        "type": "end"
      }
    ],
    "nextScene": "ep01_scene13"
  },
  {
    "id": "ep01_scene13",
    "title": "Une soirée au Grill",
    "background": "grill",
    "start": "n0",
    "nodes": [
      {
        "id": "n0",
        "type": "line",
        "line": {
          "speaker": "caroline",
          "text": "Enfin ! On commençait à croire que tu nous avais oubliés."
        }
      },
      {
        "id": "n1",
        "type": "line",
        "line": {
          "speaker": "elena",
          "text": "Je suis là, non ?"
        }
      },
      {
        "id": "n2",
        "type": "line",
        "line": {
          "speaker": "bonnie",
          "text": "On a gardé une place."
        }
      },
      {
        "id": "ext_13_00",
        "type": "line",
        "line": {
          "speaker": "caroline",
          "text": "Je pensais que tout le monde viendrait. Même Vicki."
        }
      },
      {
        "id": "ext_13_01",
        "type": "line",
        "line": {
          "speaker": "matt",
          "text": "Elle travaille encore ce soir."
        }
      },
      {
        "id": "ext_13_02",
        "type": "line",
        "line": {
          "speaker": "tyler",
          "text": "Elle sait très bien se débrouiller sans toi."
        }
      },
      {
        "id": "ext_13_03",
        "type": "line",
        "line": {
          "speaker": "matt",
          "text": "Je n’ai rien dit."
        }
      },
      {
        "id": "ext_13_04",
        "type": "line",
        "line": {
          "speaker": "bonnie",
          "text": "On peut éviter de se disputer pendant cinq minutes ?"
        }
      },
      {
        "id": "ext_13_05",
        "type": "line",
        "line": {
          "speaker": "elena",
          "text": "Je vote pour."
        }
      },
      {
        "id": "ext_13_06",
        "type": "line",
        "line": {
          "speaker": "caroline",
          "text": "Merci ! Enfin quelqu’un de raisonnable."
        }
      },
      {
        "id": "ext_13_07",
        "type": "line",
        "line": {
          "speaker": "thought",
          "text": "Le Grill sent les frites et le café. Ici, presque rien ne semble pouvoir changer."
        }
      },
      {
        "id": "n3",
        "type": "line",
        "line": {
          "speaker": "tyler",
          "text": "Donovan raconte encore sa journée passionnante."
        }
      },
      {
        "id": "n4",
        "type": "line",
        "line": {
          "speaker": "matt",
          "text": "Ignore-le."
        }
      },
      {
        "id": "n5",
        "type": "line",
        "line": {
          "speaker": "system",
          "text": "Tu peux discuter avec tes amis avant de sortir du Grill."
        }
      },
      {
        "id": "more_12_00",
        "type": "line",
        "line": {
          "speaker": "bonnie",
          "text": "Tu as entendu parler du nouveau ?"
        }
      },
      {
        "id": "more_12_01",
        "type": "line",
        "line": {
          "speaker": "elena",
          "text": "Stefan ? Oui, un peu."
        }
      },
      {
        "id": "more_12_02",
        "type": "line",
        "line": {
          "speaker": "caroline",
          "text": "Un peu ? C’est tout ce que tu vas nous dire ?"
        }
      },
      {
        "id": "more_12_03",
        "type": "line",
        "line": {
          "speaker": "elena",
          "text": "On a parlé. Il est gentil."
        }
      },
      {
        "id": "more_12_04",
        "type": "line",
        "line": {
          "speaker": "caroline",
          "text": "Gentil, c’est déjà quelque chose."
        }
      },
      {
        "id": "more_12_05",
        "type": "line",
        "line": {
          "speaker": "bonnie",
          "text": "Laisse-la respirer, Caroline."
        }
      },
      {
        "id": "more_12_06",
        "type": "line",
        "line": {
          "speaker": "thought",
          "text": "Je prends une gorgée de soda pour cacher mon sourire."
        }
      },
      {
        "id": "n6",
        "type": "explore",
        "locations": [
          {
            "id": "grill",
            "name": "Mystic Grill",
            "characters": [
              {
                "id": "grill_bonnie",
                "name": "Bonnie",
                "next": "bonnie"
              },
              {
                "id": "grill_caroline",
                "name": "Caroline",
                "next": "caroline"
              },
              {
                "id": "grill_matt",
                "name": "Matt",
                "next": "matt"
              },
              {
                "id": "grill_tyler",
                "name": "Tyler",
                "next": "tyler"
              }
            ]
          }
        ],
        "required": []
      },
      {
        "id": "bonnie",
        "type": "line",
        "line": {
          "speaker": "bonnie",
          "text": "Tu as l’air un peu ailleurs. Ça va ?"
        },
        "next": "bonnie_choice"
      },
      {
        "id": "bonnie_choice",
        "type": "choice",
        "choices": [
          {
            "label": "« Et toi, ça va ? »",
            "lines": [
              {
                "speaker": "elena",
                "text": "Et toi, Bonnie ? Tu avais l’air inquiète tout à l’heure."
              },
              {
                "speaker": "bonnie",
                "text": "J’avais besoin de te parler. Tu sais toujours trouver les mots."
              }
            ],
            "effects": [
              {
                "person": "bonnie",
                "stat": "trust",
                "amount": 1
              }
            ],
            "flags": {
              "grill_bonnie": "care"
            },
            "next": "n6"
          },
          {
            "label": "« Ça va mieux. »",
            "lines": [
              {
                "speaker": "elena",
                "text": "Ça me fait du bien de vous retrouver."
              },
              {
                "speaker": "bonnie",
                "text": "J’avais besoin de te parler. Tu sais toujours trouver les mots."
              }
            ],
            "effects": [],
            "flags": {
              "grill_bonnie": "light"
            },
            "next": "n6"
          }
        ]
      },
      {
        "id": "caroline",
        "type": "line",
        "line": {
          "speaker": "caroline",
          "text": "Je suis sûre que cette année sera différente."
        },
        "next": "caroline_choice"
      },
      {
        "id": "v7_transition_12_01",
        "type": "line",
        "line": {
          "speaker": "caroline",
          "text": "Alors, on parle de toi ou je te raconte ma journée ?"
        }
      },
      {
        "id": "caroline_choice",
        "type": "choice",
        "choices": [
          {
            "label": "« Raconte-moi ta journée. »",
            "lines": [
              {
                "speaker": "elena",
                "text": "Et toi, comment s’est passée ta journée ?"
              },
              {
                "speaker": "caroline",
                "text": "Je sais que je parle beaucoup, mais je fais attention à toi."
              }
            ],
            "effects": [
              {
                "person": "caroline",
                "stat": "affinity",
                "amount": 1
              }
            ],
            "flags": {
              "grill_caroline": "listen"
            },
            "next": "n6"
          },
          {
            "label": "« J’espère. »",
            "lines": [
              {
                "speaker": "elena",
                "text": "On verra bien."
              },
              {
                "speaker": "caroline",
                "text": "Je sais que je parle beaucoup, mais je fais attention à toi."
              }
            ],
            "effects": [],
            "flags": {
              "grill_caroline": "neutral"
            },
            "next": "n6"
          }
        ]
      },
      {
        "id": "matt",
        "type": "line",
        "line": {
          "speaker": "matt",
          "text": "Je suis content que tu sois venue."
        },
        "next": "matt_choice"
      },
      {
        "id": "v7_transition_12_02",
        "type": "line",
        "line": {
          "speaker": "matt",
          "text": "Ça te fait du bien d’être ici avec nous ?"
        }
      },
      {
        "id": "matt_choice",
        "type": "choice",
        "choices": [
          {
            "label": "« Moi aussi. »",
            "lines": [
              {
                "speaker": "elena",
                "text": "Moi aussi. Ça me rappelle de bons souvenirs."
              },
              {
                "speaker": "matt",
                "text": "Je ne veux pas qu’on perde ce qu’il reste de notre amitié."
              }
            ],
            "effects": [
              {
                "person": "matt",
                "stat": "attraction",
                "amount": 1
              }
            ],
            "flags": {
              "grill_matt": "tender"
            },
            "next": "n6"
          },
          {
            "label": "« Ça fait du bien de voir tout le monde. »",
            "lines": [
              {
                "speaker": "elena",
                "text": "Oui, ça fait du bien de voir les autres."
              },
              {
                "speaker": "matt",
                "text": "Je ne veux pas qu’on perde ce qu’il reste de notre amitié."
              }
            ],
            "effects": [],
            "flags": {
              "grill_matt": "friendly"
            },
            "next": "n6"
          }
        ]
      },
      {
        "id": "tyler",
        "type": "line",
        "line": {
          "speaker": "tyler",
          "text": "Tu comptes rester silencieuse toute la soirée ?"
        },
        "next": "tyler_choice"
      },
      {
        "id": "tyler_choice",
        "type": "choice",
        "choices": [
          {
            "label": "« Tu es toujours aussi agréable ? »",
            "lines": [
              {
                "speaker": "elena",
                "text": "Tu as toujours le mot pour mettre les gens à l’aise."
              },
              {
                "speaker": "tyler",
                "text": "Tu sais, je ne suis pas toujours aussi pénible que j’en ai l’air."
              }
            ],
            "effects": [
              {
                "person": "tyler",
                "stat": "affinity",
                "amount": -1
              }
            ],
            "flags": {
              "grill_tyler": "sharp"
            },
            "next": "n6"
          },
          {
            "label": "« Tu pourrais être sympa. »",
            "lines": [
              {
                "speaker": "elena",
                "text": "Tu pourrais essayer de discuter normalement."
              },
              {
                "speaker": "tyler",
                "text": "Tu sais, je ne suis pas toujours aussi pénible que j’en ai l’air."
              }
            ],
            "effects": [
              {
                "person": "tyler",
                "stat": "affinity",
                "amount": 1
              }
            ],
            "flags": {
              "grill_tyler": "friendly"
            },
            "next": "n6"
          }
        ]
      },
      {
        "id": "n15",
        "type": "end"
      }
    ],
    "nextScene": "ep01_scene14"
  },
  {
    "id": "ep01_scene14",
    "title": "Une invitation",
    "background": "grillexit",
    "start": "n0",
    "nodes": [
      {
        "id": "n0",
        "type": "line",
        "line": {
          "speaker": "caroline",
          "text": "Ce soir, il y a un feu de camp dans la forêt. Tu viens, Elena ?"
        }
      },
      {
        "id": "n1",
        "type": "line",
        "line": {
          "speaker": "matt",
          "text": "Ça pourrait te changer les idées."
        }
      },
      {
        "id": "n2",
        "type": "line",
        "line": {
          "speaker": "bonnie",
          "text": "Et je te promets de ne pas te laisser seule avec Caroline toute la soirée."
        }
      },
      {
        "id": "n3",
        "type": "line",
        "line": {
          "speaker": "caroline",
          "text": "Hé !"
        }
      },
      {
        "id": "more_13_00",
        "type": "line",
        "line": {
          "speaker": "matt",
          "text": "Il y aura sûrement du monde au feu de camp."
        }
      },
      {
        "id": "more_13_01",
        "type": "line",
        "line": {
          "speaker": "elena",
          "text": "Tu comptes y aller ?"
        }
      },
      {
        "id": "more_13_02",
        "type": "line",
        "line": {
          "speaker": "matt",
          "text": "Je ne sais pas encore. Vicki a promis de passer."
        }
      },
      {
        "id": "more_13_03",
        "type": "line",
        "line": {
          "speaker": "bonnie",
          "text": "Alors on se retrouvera tous là-bas."
        }
      },
      {
        "id": "more_13_04",
        "type": "line",
        "line": {
          "speaker": "caroline",
          "text": "Parfait. C’est décidé."
        }
      },
      {
        "id": "more_13_05",
        "type": "line",
        "line": {
          "speaker": "thought",
          "text": "Je pourrais refuser. Mais une partie de moi a envie de dire oui."
        }
      },
      {
        "id": "v7_transition_13_00",
        "type": "line",
        "line": {
          "speaker": "caroline",
          "text": "Alors, tu viens au feu de camp avec nous ?"
        }
      },
      {
        "id": "n4",
        "type": "choice",
        "choices": [
          {
            "label": "« Avec plaisir ! »",
            "lines": [
              {
                "speaker": "elena",
                "text": "D’accord, ça peut être sympa."
              }
            ],
            "flags": {
              "campfire_invitation_response": "excited"
            }
          },
          {
            "label": "« Si vous insistez… »",
            "lines": [
              {
                "speaker": "elena",
                "text": "Je viens surtout parce que vous insistez."
              }
            ],
            "flags": {
              "campfire_invitation_response": "hesitant"
            }
          },
          {
            "label": "« Je ne suis pas sûre… »",
            "lines": [
              {
                "speaker": "elena",
                "text": "Je ne sais pas si j’ai envie de sortir, mais je vais essayer."
              }
            ],
            "flags": {
              "campfire_invitation_response": "reluctant"
            }
          }
        ]
      },
      {
        "id": "ext_14_00",
        "type": "line",
        "line": {
          "speaker": "bonnie",
          "text": "Une soirée en forêt, c’est exactement ce dont on a besoin."
        }
      },
      {
        "id": "ext_14_01",
        "type": "line",
        "line": {
          "speaker": "elena",
          "text": "Tu disais hier qu’il se passait quelque chose de bizarre."
        }
      },
      {
        "id": "ext_14_02",
        "type": "line",
        "line": {
          "speaker": "bonnie",
          "text": "Justement. Une soirée normale pourrait me changer les idées."
        }
      },
      {
        "id": "ext_14_03",
        "type": "line",
        "line": {
          "speaker": "caroline",
          "text": "Et je refuse que tu restes chez toi à regarder ton téléphone."
        }
      },
      {
        "id": "ext_14_04",
        "type": "line",
        "line": {
          "speaker": "elena",
          "text": "Tu es vraiment incapable d’accepter un refus."
        }
      },
      {
        "id": "ext_14_05",
        "type": "line",
        "line": {
          "speaker": "caroline",
          "text": "C’est une qualité, dans certaines circonstances."
        }
      },
      {
        "id": "n5",
        "type": "line",
        "line": {
          "speaker": "bonnie",
          "text": "On se retrouve là-bas !"
        }
      },
      {
        "id": "n6",
        "type": "end"
      }
    ],
    "nextScene": "ep01_scene15"
  },
  {
    "id": "ep01_scene15",
    "title": "Avant la fête",
    "background": "bedroom",
    "start": "n0",
    "nodes": [
      {
        "id": "n0",
        "type": "line",
        "line": {
          "speaker": "narration",
          "text": "De retour chez elle, Elena se prépare pour la soirée."
        }
      },
      {
        "id": "n1",
        "type": "line",
        "line": {
          "speaker": "thought",
          "text": "Une journée entière sans m’effondrer. Je ne sais pas si c’est une victoire, mais c’est quelque chose."
        }
      },
      {
        "id": "n2",
        "type": "outfit"
      },
      {
        "id": "n3",
        "type": "line",
        "line": {
          "speaker": "jenna",
          "text": "Tu ressors ? Je suppose que c’est une bonne nouvelle."
        }
      },
      {
        "id": "n4",
        "type": "line",
        "line": {
          "speaker": "elena",
          "text": "Un feu de camp avec les autres."
        }
      },
      {
        "id": "n5",
        "type": "line",
        "line": {
          "speaker": "jenna",
          "text": "Alors… comment s’est passée ta rentrée ?"
        }
      },
      {
        "id": "more_14_00",
        "type": "line",
        "line": {
          "speaker": "elena",
          "text": "Tu crois que ça va vraiment me faire du bien ?"
        }
      },
      {
        "id": "more_14_01",
        "type": "line",
        "line": {
          "speaker": "jenna",
          "text": "Je crois que tu as le droit de t’amuser sans te sentir coupable."
        }
      },
      {
        "id": "more_14_02",
        "type": "line",
        "line": {
          "speaker": "elena",
          "text": "Je ne sais pas si je sais encore comment faire."
        }
      },
      {
        "id": "more_14_03",
        "type": "line",
        "line": {
          "speaker": "jenna",
          "text": "Commence par sortir de cette chambre. Le reste viendra."
        }
      },
      {
        "id": "more_14_04",
        "type": "line",
        "line": {
          "speaker": "elena",
          "text": "C’est un plan assez simple."
        }
      },
      {
        "id": "more_14_05",
        "type": "line",
        "line": {
          "speaker": "jenna",
          "text": "Mes meilleurs plans le sont."
        }
      },
      {
        "id": "v7_transition_14_00",
        "type": "line",
        "line": {
          "speaker": "jenna",
          "text": "Et ta journée au lycée, comment elle s’est passée ?"
        }
      },
      {
        "id": "n6",
        "type": "choice",
        "choices": [
          {
            "label": "« Plutôt bien. »",
            "lines": [
              {
                "speaker": "elena",
                "text": "C’était étrange, mais j’ai retrouvé les autres."
              }
            ],
            "effects": [
              {
                "person": "jenna",
                "stat": "trust",
                "amount": 1
              }
            ],
            "flags": {
              "jenna_party_response": "share"
            }
          },
          {
            "label": "« Rien de spécial. »",
            "lines": [
              {
                "speaker": "elena",
                "text": "Tu sais, des cours et des couloirs."
              }
            ],
            "flags": {
              "jenna_party_response": "vague"
            }
          },
          {
            "label": "« Je préfère ne pas en parler. »",
            "lines": [
              {
                "speaker": "elena",
                "text": "Je suis un peu fatiguée. On peut en parler demain ?"
              }
            ],
            "flags": {
              "jenna_party_response": "avoid"
            }
          }
        ]
      },
      {
        "id": "ext_15_00",
        "type": "line",
        "line": {
          "speaker": "jenna",
          "text": "Tu prends une veste ? Il fait froid après la tombée de la nuit."
        }
      },
      {
        "id": "ext_15_01",
        "type": "line",
        "line": {
          "speaker": "elena",
          "text": "Oui, promis."
        }
      },
      {
        "id": "ext_15_02",
        "type": "line",
        "line": {
          "speaker": "jenna",
          "text": "Et tu m’envoies un message quand tu arrives."
        }
      },
      {
        "id": "ext_15_03",
        "type": "line",
        "line": {
          "speaker": "elena",
          "text": "Tu es devenue une vraie adulte responsable."
        }
      },
      {
        "id": "ext_15_04",
        "type": "line",
        "line": {
          "speaker": "jenna",
          "text": "Ne le répète pas, ça ruinerait ma réputation."
        }
      },
      {
        "id": "ext_15_05",
        "type": "line",
        "line": {
          "speaker": "thought",
          "text": "Je me regarde dans le miroir. La fille qui me regarde en retour a presque l’air prête."
        }
      },
      {
        "id": "n7",
        "type": "line",
        "line": {
          "speaker": "jenna",
          "text": "Amuse-toi. Et sois prudente, d’accord ?"
        }
      },
      {
        "id": "n8",
        "type": "line",
        "line": {
          "speaker": "elena",
          "text": "Promis."
        }
      },
      {
        "id": "n9",
        "type": "end"
      }
    ],
    "nextScene": "ep01_scene16"
  },
  {
    "id": "ep01_scene16",
    "title": "La soirée au feu de camp",
    "background": "forest",
    "start": "n0",
    "nodes": [
      {
        "id": "n0",
        "type": "line",
        "line": {
          "speaker": "narration",
          "text": "La musique et les conversations se mêlent au crépitement du feu. La forêt paraît presque accueillante."
        }
      },
      {
        "id": "n1",
        "type": "line",
        "line": {
          "speaker": "caroline",
          "text": "Elena ! Tu as réussi à venir !"
        }
      },
      {
        "id": "n2",
        "type": "line",
        "line": {
          "speaker": "bonnie",
          "text": "Viens, on a de la place près du feu."
        }
      },
      {
        "id": "ext_16_00",
        "type": "line",
        "line": {
          "speaker": "caroline",
          "text": "Je connais une chanson qui devrait absolument passer ce soir."
        }
      },
      {
        "id": "ext_16_01",
        "type": "line",
        "line": {
          "speaker": "bonnie",
          "text": "Tu dis ça à propos de toutes les chansons."
        }
      },
      {
        "id": "ext_16_02",
        "type": "line",
        "line": {
          "speaker": "elena",
          "text": "Il y a plus de monde que je pensais."
        }
      },
      {
        "id": "ext_16_03",
        "type": "line",
        "line": {
          "speaker": "matt",
          "text": "Les soirées de Tyler attirent toujours tout le lycée."
        }
      },
      {
        "id": "ext_16_04",
        "type": "line",
        "line": {
          "speaker": "stefan",
          "text": "Tu veux que je te rapporte quelque chose ?"
        }
      },
      {
        "id": "ext_16_05",
        "type": "line",
        "line": {
          "speaker": "elena",
          "text": "Je vais bien, merci."
        }
      },
      {
        "id": "ext_16_06",
        "type": "line",
        "line": {
          "speaker": "thought",
          "text": "Les voix se mêlent au vent. À quelques mètres, Jeremy semble chercher quelqu’un."
        }
      },
      {
        "id": "ext_16_07",
        "type": "line",
        "line": {
          "speaker": "jeremy",
          "text": "Vous avez vu Vicki ?"
        }
      },
      {
        "id": "ext_16_08",
        "type": "line",
        "line": {
          "speaker": "elena",
          "text": "Pas depuis tout à l’heure."
        }
      },
      {
        "id": "ext_16_09",
        "type": "line",
        "line": {
          "speaker": "thought",
          "text": "Il hausse les épaules, mais il regarde encore vers les arbres."
        }
      },
      {
        "id": "n3",
        "type": "line",
        "line": {
          "speaker": "system",
          "text": "Explore la fête. Tu dois remarquer la tension autour de Vicki avant de t’éloigner du groupe."
        }
      },
      {
        "id": "more_15_00",
        "type": "line",
        "line": {
          "speaker": "bonnie",
          "text": "Tu veux faire le tour avec moi ?"
        }
      },
      {
        "id": "more_15_01",
        "type": "line",
        "line": {
          "speaker": "elena",
          "text": "Je vais regarder un peu autour."
        }
      },
      {
        "id": "more_15_02",
        "type": "line",
        "line": {
          "speaker": "bonnie",
          "text": "D’accord. Mais ne disparais pas sans prévenir."
        }
      },
      {
        "id": "more_15_03",
        "type": "line",
        "line": {
          "speaker": "caroline",
          "text": "Si tu trouves un coin tranquille, garde-moi une place."
        }
      },
      {
        "id": "more_15_04",
        "type": "line",
        "line": {
          "speaker": "elena",
          "text": "Toi, dans un coin tranquille ?"
        }
      },
      {
        "id": "more_15_05",
        "type": "line",
        "line": {
          "speaker": "caroline",
          "text": "Ça m’arrive. Rarement."
        }
      },
      {
        "id": "more_15_06",
        "type": "line",
        "line": {
          "speaker": "thought",
          "text": "Au loin, quelqu’un rit trop fort. Puis le bruit se perd entre les arbres."
        }
      },
      {
        "id": "n4",
        "type": "explore",
        "locations": [
          {
            "id": "campfire",
            "name": "Près du feu",
            "characters": [
              {
                "id": "camp_bonnie",
                "name": "Bonnie",
                "next": "bonnie"
              },
              {
                "id": "camp_caroline",
                "name": "Caroline",
                "next": "caroline"
              },
              {
                "id": "camp_matt",
                "name": "Matt",
                "next": "matt"
              },
              {
                "id": "camp_stefan",
                "name": "Stefan",
                "next": "stefan"
              }
            ]
          },
          {
            "id": "edge",
            "name": "À l’écart",
            "characters": [
              {
                "id": "camp_tyler",
                "name": "Tyler",
                "next": "tyler"
              },
              {
                "id": "camp_conflict",
                "name": "Jeremy et Vicki",
                "next": "conflict"
              }
            ]
          }
        ],
        "required": [
          "camp_conflict"
        ]
      },
      {
        "id": "bonnie",
        "type": "line",
        "line": {
          "speaker": "bonnie",
          "text": "Je suis contente que tu sois là. Ça te fait du bien ?"
        },
        "next": "bonnie_choice"
      },
      {
        "id": "v7_transition_15_00",
        "type": "line",
        "line": {
          "speaker": "bonnie",
          "text": "Ça te fait du bien d’être venue ?"
        }
      },
      {
        "id": "bonnie_choice",
        "type": "choice",
        "choices": [
          {
            "label": "« Oui, grâce à vous. »",
            "lines": [
              {
                "speaker": "elena",
                "text": "Oui. Surtout grâce à vous."
              },
              {
                "speaker": "bonnie",
                "text": "J’avais besoin de te parler. Tu sais toujours trouver les mots."
              }
            ],
            "effects": [
              {
                "person": "bonnie",
                "stat": "trust",
                "amount": 1
              }
            ],
            "flags": {
              "camp_bonnie": "warm"
            },
            "next": "n4"
          },
          {
            "label": "« Je ne sais pas encore. »",
            "lines": [
              {
                "speaker": "elena",
                "text": "Je ne sais pas. Mais j’essaie."
              },
              {
                "speaker": "bonnie",
                "text": "J’avais besoin de te parler. Tu sais toujours trouver les mots."
              }
            ],
            "effects": [],
            "flags": {
              "camp_bonnie": "neutral"
            },
            "next": "n4"
          }
        ]
      },
      {
        "id": "caroline",
        "type": "line",
        "line": {
          "speaker": "caroline",
          "text": "Promets-moi de ne pas passer toute la soirée à réfléchir."
        },
        "next": "caroline_choice"
      },
      {
        "id": "v7_transition_15_01",
        "type": "line",
        "line": {
          "speaker": "caroline",
          "text": "Promis, tu essaies de profiter de la soirée ?"
        }
      },
      {
        "id": "caroline_choice",
        "type": "choice",
        "choices": [
          {
            "label": "« Et toi, raconte ! »",
            "lines": [
              {
                "speaker": "elena",
                "text": "Et toi ? Tu as l’air d’avoir des choses à raconter."
              },
              {
                "speaker": "caroline",
                "text": "Je sais que je parle beaucoup, mais je fais attention à toi."
              }
            ],
            "effects": [
              {
                "person": "caroline",
                "stat": "affinity",
                "amount": 1
              }
            ],
            "flags": {
              "camp_caroline": "listen"
            },
            "next": "n4"
          },
          {
            "label": "« Je vais essayer. »",
            "lines": [
              {
                "speaker": "elena",
                "text": "Promis, je vais essayer."
              },
              {
                "speaker": "caroline",
                "text": "Je sais que je parle beaucoup, mais je fais attention à toi."
              }
            ],
            "effects": [],
            "flags": {
              "camp_caroline": "light"
            },
            "next": "n4"
          }
        ]
      },
      {
        "id": "matt",
        "type": "line",
        "line": {
          "speaker": "matt",
          "text": "On faisait ce genre de soirée tout le temps avant."
        },
        "next": "matt_choice"
      },
      {
        "id": "v7_transition_15_02",
        "type": "line",
        "line": {
          "speaker": "matt",
          "text": "Ça te manque, parfois, nos soirées d’avant ?"
        }
      },
      {
        "id": "matt_choice",
        "type": "choice",
        "choices": [
          {
            "label": "« Ça me manque parfois. »",
            "lines": [
              {
                "speaker": "elena",
                "text": "Oui. Ça me manque parfois."
              },
              {
                "speaker": "matt",
                "text": "Je ne veux pas qu’on perde ce qu’il reste de notre amitié."
              }
            ],
            "effects": [
              {
                "person": "matt",
                "stat": "attraction",
                "amount": 1
              }
            ],
            "flags": {
              "camp_matt": "nostalgic"
            },
            "next": "n4"
          },
          {
            "label": "« Les choses ont changé. »",
            "lines": [
              {
                "speaker": "elena",
                "text": "Oui, mais les choses ont changé."
              },
              {
                "speaker": "matt",
                "text": "Je ne veux pas qu’on perde ce qu’il reste de notre amitié."
              }
            ],
            "effects": [],
            "flags": {
              "camp_matt": "distant"
            },
            "next": "n4"
          }
        ]
      },
      {
        "id": "stefan",
        "type": "line",
        "line": {
          "speaker": "stefan",
          "text": "Je ne m’attendais pas à te voir ici."
        },
        "next": "stefan_choice"
      },
      {
        "id": "v7_transition_15_03",
        "type": "line",
        "line": {
          "speaker": "stefan",
          "text": "Je ne pensais pas te retrouver ici. Et toi ?"
        }
      },
      {
        "id": "stefan_choice",
        "type": "choice",
        "choices": [
          {
            "label": "« Moi non plus. »",
            "lines": [
              {
                "speaker": "elena",
                "text": "Je pourrais dire la même chose."
              },
              {
                "speaker": "stefan",
                "text": "Il y a des choses que j’aimerais te dire. Pas encore ce soir."
              }
            ],
            "effects": [
              {
                "person": "stefan",
                "stat": "affinity",
                "amount": 1
              }
            ],
            "flags": {
              "camp_stefan": "warm"
            },
            "next": "n4"
          },
          {
            "label": "« Tu as l’air préoccupé. »",
            "lines": [
              {
                "speaker": "elena",
                "text": "Tu as l’air de surveiller quelque chose."
              },
              {
                "speaker": "stefan",
                "text": "Il y a des choses que j’aimerais te dire. Pas encore ce soir."
              }
            ],
            "effects": [],
            "flags": {
              "camp_stefan": "watchful"
            },
            "next": "n4"
          }
        ]
      },
      {
        "id": "tyler",
        "type": "line",
        "line": {
          "speaker": "tyler",
          "text": "Tu es venue jouer les baby-sitters de Jeremy ?"
        },
        "next": "tyler_choice"
      },
      {
        "id": "v7_transition_15_04",
        "type": "line",
        "line": {
          "speaker": "tyler",
          "text": "Tu es venue surveiller Jeremy ?"
        }
      },
      {
        "id": "tyler_choice",
        "type": "choice",
        "choices": [
          {
            "label": "« Laisse-le tranquille. »",
            "lines": [
              {
                "speaker": "elena",
                "text": "Tu pourrais lui foutre la paix ?"
              },
              {
                "speaker": "tyler",
                "text": "Tu sais, je ne suis pas toujours aussi pénible que j’en ai l’air."
              }
            ],
            "effects": [
              {
                "person": "tyler",
                "stat": "affinity",
                "amount": -1
              }
            ],
            "flags": {
              "camp_tyler": "confront"
            },
            "next": "n4"
          },
          {
            "label": "« Je profite de la soirée. »",
            "lines": [
              {
                "speaker": "elena",
                "text": "Je suis venue voir mes amis. Et toi ?"
              },
              {
                "speaker": "tyler",
                "text": "Tu sais, je ne suis pas toujours aussi pénible que j’en ai l’air."
              }
            ],
            "effects": [
              {
                "person": "tyler",
                "stat": "affinity",
                "amount": 1
              }
            ],
            "flags": {
              "camp_tyler": "friendly"
            },
            "next": "n4"
          }
        ]
      },
      {
        "id": "conflict",
        "type": "line",
        "line": {
          "speaker": "vicki",
          "text": "Jeremy, lâche-moi. Tyler, arrête de provoquer tout le monde !"
        },
        "next": "conflict_choice"
      },
      {
        "id": "v7_transition_15_05",
        "type": "line",
        "line": {
          "speaker": "vicki",
          "text": "Elena, tu peux m’aider à calmer les choses ?"
        }
      },
      {
        "id": "conflict_choice",
        "type": "choice",
        "choices": [
          {
            "label": "« Jeremy, viens avec moi. »",
            "lines": [
              {
                "speaker": "elena",
                "text": "Jeremy, viens. On va parler ailleurs."
              },
              {
                "speaker": "elena",
                "text": "Jeremy, Vicki, Tyler… tout le monde devrait se calmer."
              }
            ],
            "effects": [
              {
                "person": "jeremy",
                "stat": "trust",
                "amount": 1
              }
            ],
            "flags": {
              "campfire_conflict_response": "protect"
            },
            "next": "n4"
          },
          {
            "label": "« Tyler, ça suffit ! »",
            "lines": [
              {
                "speaker": "elena",
                "text": "Tyler, tu peux arrêter deux minutes ?"
              },
              {
                "speaker": "elena",
                "text": "Jeremy, Vicki, Tyler… tout le monde devrait se calmer."
              }
            ],
            "effects": [
              {
                "person": "tyler",
                "stat": "affinity",
                "amount": -1
              }
            ],
            "flags": {
              "campfire_conflict_response": "confront"
            },
            "next": "n4"
          },
          {
            "label": "« Vicki, tu vas bien ? »",
            "lines": [
              {
                "speaker": "elena",
                "text": "Vicki, ça va ? Tu veux qu’on s’éloigne ?"
              },
              {
                "speaker": "elena",
                "text": "Jeremy, Vicki, Tyler… tout le monde devrait se calmer."
              }
            ],
            "effects": [],
            "flags": {
              "campfire_conflict_response": "vicki"
            },
            "next": "n4"
          }
        ]
      },
      {
        "id": "n17",
        "type": "end"
      }
    ],
    "nextScene": "ep01_scene17"
  },
  {
    "id": "ep01_scene17",
    "title": "Sous les étoiles",
    "background": "clearing",
    "start": "n0",
    "nodes": [
      {
        "id": "n0",
        "type": "line",
        "line": {
          "speaker": "narration",
          "text": "Le bruit de la fête s’éloigne. Elena choisit de prendre un moment à l’écart."
        }
      },
      {
        "id": "more_16_00",
        "type": "line",
        "line": {
          "speaker": "elena",
          "text": "On dirait que la forêt retient son souffle."
        }
      },
      {
        "id": "more_16_01",
        "type": "line",
        "line": {
          "speaker": "thought",
          "text": "Le vent a tourné. Les flammes semblent beaucoup plus loin."
        }
      },
      {
        "id": "more_16_02",
        "type": "line",
        "line": {
          "speaker": "elena",
          "text": "Il faudrait peut-être retourner vers les autres."
        }
      },
      {
        "id": "more_16_03",
        "type": "line",
        "line": {
          "speaker": "thought",
          "text": "Je distingue des pas sur le sentier. Puis plus rien."
        }
      },
      {
        "id": "more_16_04",
        "type": "line",
        "line": {
          "speaker": "journal",
          "text": "J’ignorais encore que cette minute de calme serait la dernière de la soirée."
        }
      },
      {
        "id": "n1",
        "type": "choice",
        "choices": [
          {
            "label": "Rejoindre Stefan",
            "lines": [
              {
                "speaker": "elena",
                "text": "Stefan ? Tu as une minute ?"
              }
            ],
            "flags": {
              "campfire_companion": "stefan"
            }
          },
          {
            "label": "Rejoindre Matt",
            "lines": [
              {
                "speaker": "elena",
                "text": "Matt, on peut parler ?"
              }
            ],
            "flags": {
              "campfire_companion": "matt"
            }
          },
          {
            "label": "Rejoindre Bonnie",
            "lines": [
              {
                "speaker": "elena",
                "text": "Bonnie, tu viens ?"
              }
            ],
            "flags": {
              "campfire_companion": "bonnie"
            }
          },
          {
            "label": "Rejoindre Caroline",
            "lines": [
              {
                "speaker": "elena",
                "text": "Caroline, viens prendre l’air."
              }
            ],
            "flags": {
              "campfire_companion": "caroline"
            }
          },
          {
            "label": "Rejoindre Tyler",
            "lines": [
              {
                "speaker": "elena",
                "text": "Tyler, attends."
              }
            ],
            "flags": {
              "campfire_companion": "tyler"
            }
          },
          {
            "label": "Rester seule",
            "lines": [
              {
                "speaker": "elena",
                "text": "J’ai besoin de quelques minutes pour moi."
              }
            ],
            "flags": {
              "campfire_companion": "alone"
            }
          }
        ]
      },
      {
        "id": "n2",
        "type": "line",
        "line": {
          "speaker": "thought",
          "text": "La forêt est plus calme ici. Pourtant, quelque chose semble avoir changé."
        }
      },
      {
        "id": "ext_17_00",
        "type": "line",
        "line": {
          "speaker": "thought",
          "text": "Le feu est derrière moi. Les bruits de la fête deviennent plus lointains."
        }
      },
      {
        "id": "ext_17_01",
        "type": "line",
        "line": {
          "speaker": "journal",
          "text": "Parfois, il suffit de s’éloigner de quelques pas pour entendre ce qu’on pense vraiment."
        }
      },
      {
        "id": "ext_17_02",
        "type": "line",
        "line": {
          "speaker": "elena",
          "text": "C’est étrange comme une soirée peut changer d’ambiance."
        }
      },
      {
        "id": "ext_17_03",
        "type": "line",
        "line": {
          "speaker": "thought",
          "text": "Une branche craque quelque part. Je me retourne, sans rien voir."
        }
      },
      {
        "id": "n3",
        "type": "line",
        "line": {
          "speaker": "narration",
          "text": "Au loin, près du feu, Vicki s’éloigne du groupe sans attirer l’attention."
        }
      },
      {
        "id": "n4",
        "type": "end"
      }
    ],
    "nextScene": "ep01_scene18"
  },
  {
    "id": "ep01_scene18",
    "title": "L’attaque",
    "background": "path",
    "start": "n0",
    "nodes": [
      {
        "id": "n0",
        "type": "line",
        "line": {
          "speaker": "narration",
          "text": "Un cri déchire brusquement la nuit."
        }
      },
      {
        "id": "n1",
        "type": "line",
        "line": {
          "speaker": "jeremy",
          "text": "Vicki ? VICKI !"
        }
      },
      {
        "id": "n2",
        "type": "line",
        "line": {
          "speaker": "matt",
          "text": "Ça venait du sentier !"
        }
      },
      {
        "id": "n3",
        "type": "line",
        "line": {
          "speaker": "bonnie",
          "text": "Elena, attends !"
        }
      },
      {
        "id": "n4",
        "type": "line",
        "line": {
          "speaker": "narration",
          "text": "Le groupe découvre Vicki étendue au sol, blessée et terrifiée."
        }
      },
      {
        "id": "n5",
        "type": "line",
        "line": {
          "speaker": "vicki",
          "text": "Il… il y avait quelque chose…"
        }
      },
      {
        "id": "n6",
        "type": "line",
        "line": {
          "speaker": "jeremy",
          "text": "Vicki, regarde-moi ! Reste avec moi !"
        }
      },
      {
        "id": "more_17_00",
        "type": "line",
        "line": {
          "speaker": "matt",
          "text": "Elle n’aurait pas dû partir seule."
        }
      },
      {
        "id": "more_17_01",
        "type": "line",
        "line": {
          "speaker": "elena",
          "text": "Matt, personne ne pouvait prévoir ça."
        }
      },
      {
        "id": "more_17_02",
        "type": "line",
        "line": {
          "speaker": "jeremy",
          "text": "Je lui ai dit de m’attendre."
        }
      },
      {
        "id": "more_17_03",
        "type": "line",
        "line": {
          "speaker": "elena",
          "text": "Jeremy, écoute-moi. On va faire tout ce qu’on peut."
        }
      },
      {
        "id": "more_17_04",
        "type": "line",
        "line": {
          "speaker": "bonnie",
          "text": "Les secours arrivent."
        }
      },
      {
        "id": "more_17_05",
        "type": "line",
        "line": {
          "speaker": "thought",
          "text": "Je serre les mains pour les empêcher de trembler."
        }
      },
      {
        "id": "more_17_06",
        "type": "line",
        "line": {
          "speaker": "stefan",
          "text": "Elena, reste près de moi."
        }
      },
      {
        "id": "more_17_07",
        "type": "line",
        "line": {
          "speaker": "elena",
          "text": "Je ne bouge pas."
        }
      },
      {
        "id": "v7_transition_17_00",
        "type": "line",
        "line": {
          "speaker": "thought",
          "text": "Vicki est blessée. Je dois agir, mais par quoi commencer ?"
        }
      },
      {
        "id": "n7",
        "type": "choice",
        "choices": [
          {
            "label": "Se précipiter vers Vicki",
            "lines": [
              {
                "speaker": "elena",
                "text": "Vicki, ne bouge pas. On va t’aider."
              }
            ],
            "flags": {
              "vicki_attack_first_response": "help"
            }
          },
          {
            "label": "Chercher Jeremy",
            "lines": [
              {
                "speaker": "elena",
                "text": "Jeremy, reste près de moi !"
              }
            ],
            "flags": {
              "vicki_attack_first_response": "protect"
            }
          },
          {
            "label": "Appeler les secours",
            "lines": [
              {
                "speaker": "elena",
                "text": "Quelqu’un appelle les secours, tout de suite !"
              }
            ],
            "flags": {
              "vicki_attack_first_response": "practical"
            }
          }
        ]
      },
      {
        "id": "n8",
        "type": "line",
        "line": {
          "speaker": "caroline",
          "text": "Oh mon Dieu… qu’est-ce qui lui est arrivé ?"
        }
      },
      {
        "id": "n9",
        "type": "line",
        "line": {
          "speaker": "tyler",
          "text": "J’en sais rien ! Je ne l’ai pas vue partir !"
        }
      },
      {
        "id": "n10",
        "type": "line",
        "line": {
          "speaker": "stefan",
          "text": "Il faut l’emmener à l’hôpital. Maintenant."
        }
      },
      {
        "id": "n11",
        "type": "line",
        "line": {
          "speaker": "thought",
          "text": "Stefan a réagi avant tout le monde. Son regard s’est assombri une fraction de seconde."
        }
      },
      {
        "id": "v7_transition_17_01",
        "type": "line",
        "line": {
          "speaker": "thought",
          "text": "Stefan a été incroyablement rapide. Qu’est-ce que j’en pense ?"
        }
      },
      {
        "id": "n12",
        "type": "choice",
        "choices": [
          {
            "label": "Trouver sa réaction étrange",
            "lines": [
              {
                "speaker": "thought",
                "text": "Comment a-t-il compris si vite ce qui se passait ?"
              }
            ],
            "effects": [
              {
                "person": "stefan",
                "stat": "suspicion",
                "amount": 1
              }
            ],
            "flags": {
              "stefan_attack_reaction": "suspicious"
            }
          },
          {
            "label": "Penser qu’il veut aider",
            "lines": [
              {
                "speaker": "thought",
                "text": "Il garde son calme. C’est peut-être ce dont on a besoin."
              }
            ],
            "flags": {
              "stefan_attack_reaction": "helpful"
            }
          },
          {
            "label": "Se concentrer sur Vicki",
            "lines": [
              {
                "speaker": "thought",
                "text": "Peu importe Stefan. Vicki a besoin d’aide."
              }
            ],
            "flags": {
              "stefan_attack_reaction": "focused"
            }
          }
        ]
      },
      {
        "id": "n13",
        "type": "line",
        "line": {
          "speaker": "journal",
          "text": "Je pensais que cette rentrée marquerait un nouveau départ. Mais quelque chose rôde dans Mystic Falls. Et j’ai peur que notre vie ne soit plus jamais normale."
        }
      },
      {
        "id": "ext_18_00",
        "type": "line",
        "line": {
          "speaker": "jeremy",
          "text": "Elena ! Tu as vu Vicki ? Elle était là il y a une minute !"
        }
      },
      {
        "id": "ext_18_01",
        "type": "line",
        "line": {
          "speaker": "elena",
          "text": "Jeremy, regarde-moi. Qu’est-ce qui s’est passé ?"
        }
      },
      {
        "id": "ext_18_02",
        "type": "line",
        "line": {
          "speaker": "jeremy",
          "text": "Je l’ai entendue crier. J’ai couru, mais…"
        }
      },
      {
        "id": "ext_18_03",
        "type": "line",
        "line": {
          "speaker": "thought",
          "text": "La lumière des téléphones balaie les arbres. Chaque ombre semble bouger."
        }
      },
      {
        "id": "ext_18_04",
        "type": "line",
        "line": {
          "speaker": "matt",
          "text": "Vicki ! Réponds-moi !"
        }
      },
      {
        "id": "ext_18_05",
        "type": "line",
        "line": {
          "speaker": "bonnie",
          "text": "Il faut appeler quelqu’un. Maintenant."
        }
      },
      {
        "id": "ext_18_06",
        "type": "line",
        "line": {
          "speaker": "stefan",
          "text": "Restez ensemble. Ne vous séparez pas."
        }
      },
      {
        "id": "ext_18_07",
        "type": "line",
        "line": {
          "speaker": "elena",
          "text": "On ne la laisse pas ici."
        }
      },
      {
        "id": "ext_18_08",
        "type": "line",
        "line": {
          "speaker": "thought",
          "text": "Je voudrais que quelqu’un dise que tout va bien. Personne ne le fait."
        }
      },
      {
        "id": "n14",
        "type": "line",
        "line": {
          "speaker": "system",
          "text": "Fin de l’épisode 1 — Mystic Falls."
        }
      },
      {
        "id": "n15",
        "type": "end"
      }
    ]
  }
];
