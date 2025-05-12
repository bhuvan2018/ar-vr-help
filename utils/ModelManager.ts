export interface Model3D {
  id: string;
  name: string;
  modelUrl: string;
  thumbnail: string;
  format: 'glb' | 'gltf';
  scale: number;
  position: [number, number, number];
  rotation: [number, number, number];
  sketchfabId?: string;
}

export const SAMPLE_MODELS: Model3D[] = [{
  id: '1',
  name: 'Vintage Wooden Chair',
  modelUrl: 'https://sketchfab.com/models/c226b9e0cace4a20bf017b7061ada18d',
  thumbnail: 'https://api.a0.dev/assets/image?text=vintage%20wooden%20chair%20with%20beautiful%20craftsmanship&aspect=1:1',
  format: 'gltf',
  scale: 1.0,
  position: [0, 0, -1],
  rotation: [0, 0, 0],
  sketchfabId: 'c226b9e0cace4a20bf017b7061ada18d'
}];

export const loadModel = async (modelId: string): Promise<Model3D | null> => {
  try {
    return SAMPLE_MODELS.find(m => m.id === modelId) || null;
  } catch (error) {
    console.error('Error loading model:', error);
    return null;
  }
};