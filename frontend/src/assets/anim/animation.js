const isOnce = true

export const educationParentVars = {
  hidden: {
    x: -70,
    opacity: 0
  }, 
  visible: {
    x: 0,
    opacity: 1,
    transition:{ 
      type: 'spring',
      stiffness: 150,
      when: 'beforeChildren',
      staggerChildren: 0.2
    }
  },
}
export const educationChildVars = {
  hidden: {
    y: 50,
    opacity: 0.07
  },
  visible: {
    y: 0,
    opacity: 1,
  }, 
}
export const comingParentVars = {
  hidden: {
    y: 20,
    opacity: 0
  }, 
  visible: {
    y: 0,
    opacity: 1,
    transition:{ 
      duration: .2,
      when: 'beforeChildren',
      staggerChildren: 0.11,
      
    }
  }
}
export const comingChildVars = {
  hidden: {
    x: -50,
    opacity: 0
  },
  visible: {
    x: 0,
    opacity: 1,
  }, 
}
export const learnedParentVars = {
  hidden: {
    y: 20,
    opacity: 0
  }, 
  visible: {
    y: 0,
    opacity: 1,
    transition:{ 
      duration: .2,
      when: 'beforeChildren',
      staggerChildren: 0.11
    
    }
  }
}
export const learnedChildVars = {
  hidden: {
    y: 50,
    opacity: 0.03
  }, 
  visible: {
    y: 0,
    opacity: 1
  }
}
export const heroParentVars = {
  hidden: {
    y: 20,
    opacity: 0
  }, 
  visible: {
    y: 0,
    opacity: 1,
    transition:{ 
      duration: .2,
      when: 'beforeChildren',
      staggerChildren: 0.15
    
    }
  }
}
export const heroChildVars = {
  hidden: {
    x: -70,
    opacity: 0
  }, 
  visible: {
    x: 0,
    opacity: 1
  }
}
export const bioVars = {
  inView: {
    x: 0,
    opacity: 1
  },
  transition: {
    type: 'spring',
    stiffness: 150
  }
}

export const doParentVars = {
  hidden: {
    y: 50,
    opacity: 0
  }, 
  visible: {
    y: 0,
    opacity: 1,
    transition:{ 
      type: 'spring',
      stiffness: 150,
      when: '',
      staggerChildren: .5
    }
  }
}
export const doChildVars = {
  hidden: { 
    scale: 0,
    opacity: 0
  }, 
  visible: {
    opacity: 1,
    scale: [1, 1.05, 1],
  }
}