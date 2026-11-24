export interface Project {
  slug: string;
  title: string;
  category: 'Research project' | 'Engineering exploration';
  summary: string;
  question: string;
  example: { caption: string; columns: string[]; rows: string[][] };
  sections: { title: string; paragraphs: string[] }[];
}

export const projects: Project[] = [
  {
    slug: 'mechanistic-interpretability-of-algorithmic-tasks',
    title: 'Mechanistic Interpretability of Algorithmic Tasks',
    category: 'Research project',
    summary: 'Looking for the computations behind parity, counting, and addition in small sequence models.',
    question: 'When a model reads a binary string, does it carry an internal state that plays the same role as the state of a simple algorithm?',
    example: {
      caption: 'Parity of the prefix, starting from an even count',
      columns: ['Input prefix', 'Number of ones', 'Reference state'],
      rows: [['1', '1', 'Odd'], ['10', '1', 'Odd'], ['101', '2', 'Even'], ['1011', '3', 'Odd']],
    },
    sections: [
      { title: 'A running example', paragraphs: ['For parity, the answer depends on whether a string contains an even or odd number of ones. Reading a zero leaves the answer unchanged. Reading a one flips it. This gives us an exact reference state at every position in the sequence.'] },
      { title: 'What the experiments test', paragraphs: ['I have compared training and held-out exact-match accuracy on parity, modulo-3 counting, finite-state transitions, and two-digit addition. A small-sample overfitting check helps distinguish the ability to fit examples from the ability to apply a rule to new inputs.', 'The models could fit the small training sets, while accuracy on the original validation sets varied across tasks. That gap limits what I can infer about the algorithm a model has learned.'] },
      { title: 'Open question', paragraphs: ['Once a model generalizes reliably, I would like to test whether changing a candidate state inside the model changes its subsequent predictions in the way the reference algorithm predicts.'] },
    ],
  },
  {
    slug: 'explorations-in-attention-mechanisms',
    title: 'Explorations in Attention Mechanisms',
    category: 'Engineering exploration',
    summary: 'Implementing attention variants and comparing how queries, keys, and values interact.',
    question: 'What changes when the value pathway has more direct access to interactions between queries and keys?',
    example: {
      caption: 'One attention head at a single query position',
      columns: ['Source token', 'Example weight', 'Contribution'],
      rows: [['First token', '0.75', '0.75 × its value vector'], ['Second token', '0.25', '0.25 × its value vector']],
    },
    sections: [
      { title: 'The implementation', paragraphs: ['I started from a small decoder-only Transformer with a fused query, key, and value projection. Its standard attention layer provides a reference implementation for testing changes to the value pathway.'] },
      { title: 'Comparisons', paragraphs: ['I explored gated attention, learned query–value interactions, and stacked attention layers. The design question was whether changing how information enters the value stream could improve on the standard attention baseline.'] },
      { title: 'What I took away', paragraphs: ['In my experiments, the variants did not produce a consistent improvement over standard attention. I kept the baseline as the reference for further implementation work. The comparisons leave open how these choices would behave at a different scale.'] },
    ],
  },
];
