import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';

const Header = () => {
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsProfileOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const toggleProfile = () => {
    setIsProfileOpen(!isProfileOpen);
  };

  return (
    <motion.header 
      className="w-full bg-gray-100 border-b border-gray-200 py-3 px-6 md:px-12"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <Link to="/" className="flex items-center space-x-2">
          <motion.div
            whileHover={{ rotate: 10 }}
            transition={{ duration: 0.3 }}
          >
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              viewBox="0 0 24 24" 
              className="w-8 h-8 text-indigo-600 fill-current"
            >
              <path d="M6,6L10,6L10,10L6,10L6,6M16,6L22,6L22,10L16,10L16,6M2,12L5,12L5,15L2,15L2,12M17,12L22,12L22,15L17,15L17,12M7,12L15,12L15,20L7,20L7,12M3,2L5,2L5,4L3,4L3,2M19,2L21,2L21,4L19,4L19,2" />
            </svg>
          </motion.div>
          <span className="text-indigo-600 text-xl font-semibold">AlumniBridge</span>
        </Link>
        
        <div className="flex items-center relative" ref={dropdownRef}>
          <motion.div
            className="w-10 h-10 rounded-full overflow-hidden border-2 border-indigo-600 cursor-pointer"
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.3 }}
            onClick={toggleProfile}
          >
            <img 
              src="data:image/jpeg;base64,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"
              alt="User profile" 
              className="w-full h-full object-cover" 
            />
          </motion.div>
          
          <AnimatePresence>
            {isProfileOpen && (
              <motion.div 
                className="absolute right-0 top-12 w-64 bg-white rounded-lg shadow-lg z-10"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}
              >
                <div className="p-4 border-b border-gray-100">
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 rounded-full overflow-hidden bg-indigo-600">
                      <img 
                        src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAJQAlAMBEQACEQEDEQH/xAAbAAEAAgMBAQAAAAAAAAAAAAAABQYBBAcDAv/EAD0QAAEDAwEFBAcHAwMFAAAAAAEAAgMEBRESBiExUWEiQXGBEyMyQpHB0QcUUnKhseFDYvCissIzU4KDkv/EABoBAQADAQEBAAAAAAAAAAAAAAABAwQFAgb/xAAuEQACAgIBAwMCBQQDAAAAAAAAAQIRAwQhBRIxIkFREzJCYYGR0XGhwfAjUrH/2gAMAwEAAhEDEQA/AO4oAgCAIDBOEBp1l0pKXLZJMv8AwN3n+FZDFKfgthhnPwiHqNoJnEiCJrBzd2itEdZe7NcdSK+5mhLcqyX26iTwacfsrVigvYvWHGvCPB0sj/bkc7xcSvXal4LEkvB8hxHP4qaJPRlVPHvZNI3H95Xlwi/KPDhB+UbcN6rovakEg5PaFW8EGVS1sb9qJOl2ggeQ2pjMX9w7QVMtaS+3kzT1JLmPJLxTRysD4nh7T3tOVQ01wzK04umeiggIAgCAIAgCAIDwq6qKkiMk7w1o4cz4L1GEpukeoQlN0is3G9z1JLIT6KLoe0fNbcevGPL5Zvxa8Y8vlkXqWijRY1KKJsakoWNSULGpKFjKURYylE2MpRB609VNTP1wSOYe/HA+KiUIy8nmUIzVSLHa75FUkRT4jlPA+676LFk13HleDBl13HmPJMrOZwgCAIAgCA0rncIqCDXJvcfYYOJKsx43kdIsx43N0U2srJqyYyznfwAHADoulDGoKkdCEVBUjwyvdHuxlKFjKULGUoWMpQsZShYylCxlKFjKULGUoWMpQsn7LezGW09Y7LODZD7vQ9Fkz69+qJkzYL9USzA54LCYzKAIAgNetqo6OnfPKcNaOHM8gvUIOcu1HqMXJ0ii1tZJW1DppjkngO5o5LrQxqEaR0IRUVSPDK9nsZQDKAZQDKCzdprXXVLdUdM/Tzd2R+qqlmxx8srlmgvLPd9huTRn0LXfleF4WzifueVsQ+SPmhmgfonifG7k5uFdGSl4ZapJ+GeeV6JsZQDKAZQDKULLLs3dS7FFUO3/ANJx/wBv0WHZw164mTPi/EiyBYjKEAKApW0lx+91noYz6mEkeLu8/JdTVxdke5+WbMMO1WRGpaS8akA1IBqQAHJAHE7kIsuFlscdNG2eqaH1B34O8M/lczPsOfpj4MmTM5cLwTYGFlKDKA8KqlhqozHPG17TzHDwXqMpRdpkxk4u0Uq82x9snABLoX+w75HqupgyrKvzN2PJ3oj9SvLBqQDUgGpAZDy1wcwkOByCO5GkwXuyV4uFE2Td6RvZkHVcfPj+nOjBkh2yokFUVkdfq37jbZJGn1juwzxKu18f1MiR7xx7pFAyu1RusZShYylCxlKFjKCya2UpRU3L0rhlkLdWCPe4D5nyWTcn246+SnNL00XUcFyjIZQBAEBoXqkFZbpo8ZcG6mdHDgrcM+zIme8cu2VnPs967dG6xlKFjKULGUoWMpQsl9mK77rcmxuPq5+weh7v86rLt4u7Ha8oqyx7ol4BXIMZT9s6rXVw0wPZjZqI6n+B+q6mhD0uRowqlZXMrfRdYylCxlKFjKULM5ShZadhiD99xx7H/Jc7qHHb+v8AgozexalzigIAgCAHggOWagSdPDO5fQpcG6zGVNCxlKFjKULGUoWZDi0hzSQ4HII7k7b4Ys6XQVAq6KGoH9Rgd596+fyR7JOJikqdHPr7P6e8Vcmf6haPAbvku5rR7cMUaYcRSNHKuo9DKUBlKAylAZShZNbJVwpboI3nDJxozyPd9PNZN3E547XsV5FaL4DuXGM5lAEAQEbf60UNrmkzh7m6GDm4/wCZV2vjeTIkeoK2c6z8F3zVYyooDKUBlKAylAZShZd9kKtps4Y849HI5o/f5rkbuN/Vv5RnyL1FHnk9JPI8+88n4krsRjSSLUfGV6JsZQWMoLGUFjKCxnqlCy67PbSxzsZTXB4ZMNzZHHAf48iuPs6Uovvh4KJQrksoORkcFgPBnuQGpX3CmoIfS1UoYO4e87wC948c8jqKJSbKBe7tJdanWcsiZujj5dT1Xc19dYY17+5fFdpHZWg9WMoLGUFjKCxlBYygsk7XcXUkDmA8X6v0H0WfNh75WeJKyJPZJbyOFpXgGMqaAylAZSgMpQGUoDKUBnKUDcpLrX0YDaerlY0cG5yPgVVPXx5OZRIaTNl+0d2e3BrHN/K1o+SrWlhX4R2ojZZpJnl80j5Hni57iSfNaIxUVSRJ8ZU0BlKAylAZSgMpQGUoDKUD1ijfI0lucZwvMml5FmblGYbjVRHdpleMeaYX3Y4v8jwma2eqsJsZ6oLGeqCxnqgsZ6oLGeqCxlBYygsauqCxlSLGVAsZ6oLGeqCxnqgsZ6oLGeqCxlBZbNk7d96tskrm59cQPgFy93M4ZEl8Hlsi9sqc09+mf7szWyN+GD+oWnp8+/Al8cEJkHqW6ibGpKFjUlCxqShZ9RtfLI2ONjnPccNa0ZJKiVRVsWWO3bH3CpAfVubSsPuntP8AgNw+K52XqOOHEOSLLBS7IWuHBlZJO7m9+B8BhYJ9Qzy8cEWSUVmtkQw2gp93OMH91Q9nM/xMiz0da7e4YdQ0x/8AU36KPrZf+z/cWalRs5aZxh1FG3rHlp/RWR3M8fEibIat2JiILqGqew9zZRqHxH8rXj6nJffH9hZV7naK+1nNXAWx8BI05afP6rpYdjFm+1k2aGpaKJsakoWNSULGpKFjUlCzp+ylMaWw0rXbnPaZHf8Akc/thfNbs+/PJ/oeWRX2gUJloIa1g7VO7S78rsfPHxWrpmXtyOD9yChal3aBjUlAakoErYrJVXmUiL1cDTh8zhuHQDvKy7O1DXXPL+AdEtFmo7VFppo+2Rh0rt7nefyXAzbGTO7mwSKoAQBAEAQBAfL2NkaWvALSMEEbinjlAqF/2QY8OqLSAx43mn7nflPd4cF1dXqLXpy+PkFIeHRvcyRpa5pwQdxBXaXKtA+dSmgNSUDbtVIbjcYKRufWOAd0bxJ+AKqz5Fixub9gddaA1oDdwG4DkvlLb5B51dPHVU0lPM3VHI0tcOhUxm4SUl5QOQ3Kjkt1dNSTe1E7GfxDuPmF9ZhyRywU4+5BrZVtEWS+zVmdeq0xudpp4sOlcDvxyHjzWTc2Vrwv3fglHUKWnipYGQQRhkbBhrR3L5mU5Tl3S8knsoAQBAEAQBAEAQGCgK3tZs6y5Quq6ZoZWRtzy9IB3HryK36O48MuyX2v+wOb5X0dHmxlKFl7+z61lkUlymbvk7EWfwjifM7vJcPqme5LEvbl/wBT0i5LkgFAVXbixmvpfvlK3NVA3eAN72cvEd3muj07a+lPsl9r/wDSGjnGpfRnizbtdyqLZWMqqV2Ht4jucO8FVZsEc0HCQs6nY71S3ml9LTnEjf8AqRE9ph+nVfMbOtk15VLx8ntOyTWckIAgCAIAgCAIDBIAyeCAoG2G1TaprqC2Sep4SzN9/wDtHTr3ru6Gh2/8mVc+yPDZTtS65Fkps/aJbzXtgblsTe1LIPdb9T/nBZtvYWvj7vf2JXJ1mCGOCJkUTQyNjQ1rRwAC+Vbcnb8ns9FACAIDn22uzLoHPuVujJhJzPE0ewe9wHLmu707e7ksWR8+z/weJIpmfgu0eLPajraihqGVFJK6KVnAt7xyPMdFXkxQyR7Zq0Lov9h22patrYbpppZ/+5n1bvPu8/iuBs9LyY/Vi5X9z2ppltY9r2hzHBzTvBByCuW+HTPZnKAygCAIDGQgI+7XmgtUeqsqGsdjdGN73eAV2HWy53UEQ2kc92h2tq7tqhg1U1IeLAe0/wDMeXRfQ6nToYPVLmX++Ctysr2V0KIs2rZQVN0rGUtGzVI7ie5o5noqc2aGGDnNkrk6zYrRT2eibTwDLjvkkI3vdz+gXyuxsT2J90v0XwWJUSKoJCAIAgMEZGDwQFF2p2M1ufWWdg1e1JTDcD+Xl4LtaXU+30Zn/R/yVyh8FDe10b3Mka5r2nDmuGCCu9FqStFZjKmgb1uvNwtjs0VXJG38Gcs/+TuVGbVw5vvjZKk0WWi+0GrYAKyjil5uicWH4HK5uTo0HzCVHr6hKxfaFbXD1tJVsd34DXD91ml0fN7SX9yfqI9Hbf2gDsxVbjy0D6ryukbHyh9RGlU/aLABilt8rj3GV4b+2VbDo0/xTX6B5F7EFX7a3irBbHJHSsPdC3f8T8sLdi6Vrw5av+p5c2yvPkdI8vke57zxc52SfMroKCSpeDzZjKmgSlisdbep9NOzTC04fO72W/U9Fk2tvFrxuXn4JUWzqVjs1LZqQQ0rcuO+SUjtPPX6L5jY2Z7E+6X7fBclRJKgkIAgCAIAgCAhr5s5QXpuqoi0TgdmaPc4ePMeK1a27m136Xx8EOKZQbvsZdbfqfA375CPeiHaA6t4/DK7+v1TBl4l6X+f8lMoSRW3ZY8seC14OC0jBHkukmmrK+RlSBlAMoBqQGNSA3bda6+6O00FLJMPxgYaPFx3KjPsYsC/5JUSk2XWybAxxls13lEp4+giJDfM8T+i4mz1eUuMKr82WrH8l2ggip4mxQxsjjYMNa0YAXGlJyfdJ2y09FACAIAgCAIAgCAIDBCgGpXWyhuDdNbSxTjm9gJHmrcWfJi+yTRDin5K7cNhLIWOfCyoh6MlJH+rK6WLq2zdSaf6fweHjiUq9WeCgc4RSTOwcdsj5BdrX2ZZVykUuNEVTRNmlDHEgHktc5dqtHkuVl2Ot1YGummqt/EBzQP9q4uz1LNDiKX+/qWxxplpotkrHREOjoWSP/FMTJ++4eS5eXqOzk8y/bgtUIommsaxoa0ANA3AcAsN3yz0fQ4KQZQBAEAQBAf/2Q==" 
                        alt="User profile" 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-800">Suyash Gupta</h3>
                      <button className="mt-1 text-indigo-600 text-sm border border-indigo-600 rounded-full px-4 py-1">
                        View Profile
                      </button>
                    </div>
                  </div>
                </div>
                
                <div className="py-2">
                  <Link to="/opening" className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-50">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-3 text-indigo-500" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M4 4a2 2 0 012-2h8a2 2 0 012 2v12a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm3 1h6v4H7V5zm8 8v-1h-2v1h2zm0-3V8h-2v2h2zM7 8H5v2h2V8z" clipRule="evenodd" />
                    </svg>
                    Opening
                  </Link>
                  <Link to="/story" className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-50">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-3 text-indigo-500" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M9 4.804A7.968 7.968 0 005.5 4c-1.255 0-2.443.29-3.5.804v10A7.969 7.969 0 015.5 14c1.669 0 3.218.51 4.5 1.385A7.962 7.962 0 0114.5 14c1.255 0 2.443.29 3.5.804v-10A7.968 7.968 0 0014.5 4c-1.255 0-2.443.29-3.5.804V12a1 1 0 11-2 0V4.804z" />
                    </svg>
                    Story
                  </Link>
                  <Link to="/event" className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-50">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-3 text-indigo-500" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                    </svg>
                    Event
                  </Link>
                  <Link to="/donation" className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-50">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-3 text-indigo-500" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
                    </svg>
                    Donation
                  </Link>
                  <Link to="/feedback" className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-50">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-3 text-indigo-500" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z" clipRule="evenodd" />
                    </svg>
                    Feedback
                  </Link>
                </div>
                
                <div className="p-3 flex justify-center border-t border-gray-100">
                  <Link 
                  to="/"
                    className="text-indigo-600 border border-indigo-600 rounded-full px-6 py-1 text-sm font-medium hover:bg-indigo-50"
                    onClick={() => {
                      // Handle sign out logic here
                      setIsProfileOpen(false);
                    }}
                  >
                    Sign Out
                  </Link>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </motion.header>
  );
};

export default Header;