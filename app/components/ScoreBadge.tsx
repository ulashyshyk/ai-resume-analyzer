interface ScoreBadgeProps {
    score: number;
  }
  
  const ScoreBadge = ({ score }: ScoreBadgeProps) => {
    const getBadgeStyles = () => {
      if (score > 70) {
        return {
          bgColor: 'bg-green-400',
          textColor: 'text-green-700',
          label: 'Strong'
        };
      } else if (score > 49) {
        return {
          bgColor: 'bg-yellow-300',
          textColor: 'text-yellow-600',
          label: 'Good Start'
        };
      } else {
        return {
          bgColor: 'bg-red-400',
          textColor: 'text-red-600',
          label: 'Needs Work'
        };
      }
    };
  
    const { bgColor, textColor, label } = getBadgeStyles();
  
    return (
      <div className={`${bgColor} rounded-full p-3 py-2 inline-block`}>
        <p className={`${textColor} font-semibold text-sm`}>{label}</p>
      </div>
    );
  };
  
  export default ScoreBadge;
  