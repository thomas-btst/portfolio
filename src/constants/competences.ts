export type CompetenceKey = 1 | 2 | 3 | 4 | 5 | 6

const competencyEntries = {
    1: "Réaliser un développement d’application",
    2: "Optimiser des solutions informatiques",
    3: "Administrer des systèmes informatiques communicants complexes",
    4: "Gérer des données de l’information",
    5: "Conduire un projet Système d’Information",
    6: "Se projeter dans un environnement professionnel",
} as const satisfies Record<CompetenceKey, string>

export const competencies = new Map<CompetenceKey, string>(
    Object.entries(competencyEntries).map(([key, value]) => [+key as CompetenceKey, value])
)