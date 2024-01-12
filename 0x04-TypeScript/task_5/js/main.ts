// Define the MajorCredits interface
interface MajorCredits {
  credits: number;
  brand: 'Major';
}

interface MinorCredits {
  credits: number;
  brand: 'Minor';
}

const sumMajorCredits = (subject1: MajorCredits, subject2: MajorCredits): MajorCredits => {
  return {
    credits: subject1.credits + subject2.credits,
    brand: 'Major',
  };
};

const sumMinorCredits = (subject1: MinorCredits, subject2: MinorCredits): MinorCredits => {
  return {
    credits: subject1.credits + subject2.credits,
    brand: 'Minor',
  };
};
